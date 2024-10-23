import { useState } from "react";
import { BadgeCheck } from "lucide-react";

interface RegisterButtonProps {
  title?: string; // Optional title prop
  buttonCol?: string; // Optional button color prop (e.g., "yellow-400")
  textCol?: string; // Optional text color prop (e.g., "yellow-400")
  onClick?: () => void; // Optional onClick handler
}

function RegisterButton({
  title = "Register",
  buttonCol = "gray-800",
  textCol = "text-green-400",
  onClick, // Pass onClick as a prop to trigger form submission
}: RegisterButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="submit" // Button will now trigger form submission
      className={`p-4 text-center rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform ${
        isHovered ? `bg-${buttonCol} scale-105` : `bg-${buttonCol} scale-100`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Optional: additional onClick handler
    >
      {/* Button Text */}
      <span
        className={`transition-all duration-300 ease-in-out ${
          isHovered ? "text-green-400" : textCol
        }`}
      >
        {title}
      </span>

      {/* Icon */}
      <BadgeCheck
        className={`w-5 h-5 transition-all duration-300 ease-in-out transform ${
          isHovered
            ? "opacity-100 text-green-400 translate-x-0"
            : "opacity-0 -translate-x-2"
        }`}
      />
    </button>
  );
}

export default RegisterButton;
