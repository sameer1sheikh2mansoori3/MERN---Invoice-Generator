import { useState } from 'react'; 
import FormInput from './../components/FormInput';
import RegisterButton from './../components/RegisterButton';
import { Link , useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { registerAPI } from '@/utils/Constant';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  // State variables for input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false); // Added loading state
  const [successMessage, setSuccessMessage] = useState(''); // Added success message state

  // Email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password regex pattern (min 8 chars, at least one letter, one number)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Handle form submission
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    setSuccessMessage(''); // Clear previous success message

    // Reset errors
    setErrors({});

    // Simple client-side validation
    const newErrors: { name?: string; email?: string; password?: string } = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one number.';
    }

    // Check if there are errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false); // Set loading back to false
      return; 
    }

    // Handle successful form submission
    
try {
  console.log('Form submitted:', { name, email, password });
 const data = await axios.post( registerAPI , {
    username :name,
    email,
    password
  })
  // console.log(data.data.message.data.data)
  localStorage.setItem('token' ,data.data.message.data.data )
  setSuccessMessage('You have successfully signed up!');// Display success message
  setName('') 
  setEmail('')
  setPassword('')
  toast.success('You have successfully signed up!')
  navigate('/products')
  setLoading(false); // Set loading back to false


  
} catch (error ) {
  toast.error(error?.message)
  console.log(error)
}
  };

  return (
    <>
      <div className='relative flex flex-row bg-black'>
        <div className="w-1/2 h-[90vh] mt-24">
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://s3-alpha-sig.figma.com/img/1bc7/fb61/a897da938e7209deb34e49ebb515d52e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DG6lCpjB98AkQlYv-dD~Y6tqyC9o65F6cTifJujPT7bgQBvJ0ZGi-nmG7NMFt9fL9IceocZS-s6LSs-zIloalIE4F9mcP0EFaUDi8Gsd7d0qj5VBD73OD5xL37qx8uk7G~izXQ2QHGfFUO5GRAhCKOaxCAj78RE5K4Gw0QCQC-CSi3BnsGdcEPX~TRgA~vpUl94PoD25~F7D7T9cL-WFvsSEgAAouiMvagMswI~0bHR6MoO6qmKGJYXWxlMCYLJen1PPPghdGWnNnDAY~nRzpGfXbtrOaj6sL5kjx0m1gBsE6kaWHb9a8sbXmgjx8-PVulrjkoYBh0j7jHmpdcrMAA__"
                alt="Background"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col w-1/2 mt-24">
          <h1 className="mt-24 text-4xl font-bold text-white">
            Sign up to begin your journey
          </h1>
          <p className="text-gray-300">
            Join us today and explore new opportunities.
          </p>

          {successMessage && (
            <div className="p-4 mb-4 text-green-500 bg-green-100 rounded-lg">
              {successMessage}
            </div>
          )}

          <form className='flex flex-col justify-start w-full' onSubmit={handleSubmit}>
            <div>
              <FormInput 
                inputMessage={errors.name || 'This name will be displayed with your inquiry'} 
                inputPlaceholder='Enter Name' 
                inputName='Enter Your Name' 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
              />
              <FormInput 
                inputMessage={errors.email || 'This email will be displayed with your inquiry'} 
                inputPlaceholder='Enter Email Id' 
                inputName='Enter Your Email' 
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
              />
              <FormInput 
                inputMessage={errors.password || 'This password will be displayed with your inquiry'} 
                inputPlaceholder='Enter Password' 
                inputName='Enter Your Password' 
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
              />
            </div>

            <div className='flex flex-row mt-4'>
              <RegisterButton 
                title="Sign Up"
                onClick={handleSubmit}
                disabled={loading} // Disable button during loading
              />

              <div className='flex items-center ml-3 text-white'>
                <Link to='/login'>Already have an account?</Link>
              </div>
            </div>
          </form>
        </div>

        {/* Circular Bluish Light Effect */}
        <div className="absolute top-0 right-0 w-1/4 rounded-full pointer-events-none h-1/4 bg-gradient-to-l from-blue-300 via-transparent to-transparent opacity-30"></div>
      </div>
    </>
  );
};

export default SignupPage;
