import { useState } from "react";
import { BadgeCheck } from "lucide-react";

interface RegisterButtonProps {
  title?: string; // Optional title prop
  buttonCol?: string; // Optional button color prop (e.g., "yellow-400")
  textCol?: string; // Optional text color prop (e.g., "yellow-400")
}

function RegisterButton({
  title = "Button",
  buttonCol = "gray-800",
  textCol = "text-green-400", // Using Tailwind color class for green
}: RegisterButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`p-4 text-center rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform ${
        isHovered ? `bg-${buttonCol} scale-105` : `bg-${buttonCol} scale-100`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Button Text with optional transition */}
      <span
        className={`transition-all duration-300 ease-in-out ${
          isHovered ? "text-green-400" : textCol // Use Tailwind color classes
        }`}
      >
        {title}
      </span>

      {/* Icon with smooth transition */}
      <BadgeCheck
        className={`w-5 h-5 transition-all duration-300 ease-in-out transform ${
          isHovered ? "opacity-100 text-green-400 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      />
    </button>
  );
}

export default RegisterButton;
