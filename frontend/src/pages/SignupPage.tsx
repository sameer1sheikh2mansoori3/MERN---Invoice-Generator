import { useState } from 'react'; // Import useState
import FormInput from './../components/FormInput';
import RegisterButton from './../components/RegisterButton';

const SignupPage = () => {
  // State variables for input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({}); // Define error state type

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});

    // Simple client-side validation
    const newErrors: { name?: string; email?: string; password?: string } = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!password) newErrors.password = 'Password is required.';

    // Check if there are errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    // Handle successful form submission here (e.g., API call)
    console.log('Form submitted:', { name, email, password });
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi ratione doloremque asperiores quisquam aspernatur unde, ex eius sequi facilis!
          </p>

          <form className='flex flex-col justify-start w-full' onSubmit={handleSubmit}>
            <div>
              <FormInput 
                inputMessage={errors.name || 'This name will be displayed with your inquiry'} 
                inputPlaceholder='Enter Name' 
                inputName='Enter Your Name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormInput 
                inputMessage={errors.email || 'This email will be displayed with your inquiry'} 
                inputPlaceholder='Enter Email Id' 
                inputName='Enter Your Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput 
                inputMessage={errors.password || 'This password will be displayed with your inquiry'} 
                inputPlaceholder='Enter Password' 
                inputName='Enter Your Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='flex flex-row mt-4'>
              <RegisterButton />
              <div className='flex items-center ml-3 text-white'>Already have an account?</div>
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
