import Link from "next/link";
import React from "react";

interface WhatsAppButtonProps {
  phoneNumber: string; // in international format e.g. "15551234567"
  message?: string; // optional pre-filled message
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello!",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-green-600 transition-colors z-50"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.54 17.2,14.65L16.73,15.53C16.66,15.68 16.54,15.82 16.39,15.91L15.41,16.5C15.23,16.61 15.03,16.64 14.83,16.59C14.64,16.54 14.45,16.41 14.3,16.24C13.37,15.32 12.26,14.22 11.25,12.73C10.22,11.23 9.41,9.74 9.1,8.5C9,8.27 9.04,8.03 9.19,7.85L10.22,6.82C10.39,6.65 10.62,6.56 10.86,6.56H11.91C12.11,6.56 12.29,6.65 12.43,6.8L13.03,7.4C13.18,7.55 13.28,7.74 13.31,7.95C13.34,8.16 13.29,8.37 13.19,8.54L12.5,9.62C12.42,9.74 12.4,9.9 12.43,10.05C12.46,10.2 12.55,10.33 12.68,10.44C13.3,10.97 14.13,11.81 14.61,12.38C14.73,12.5 14.88,12.58 15.04,12.58C15.2,12.58 15.35,12.53 15.48,12.43L16.46,11.75C16.62,11.64 16.82,11.61 17.02,11.66C17.22,11.72 17.4,11.83 17.53,12L18.2,12.67C18.35,12.82 18.44,13.01 18.47,13.22C18.5,13.43 18.45,13.64 18.35,13.81L17.34,14.82C17.18,14.98 16.94,15.06 16.75,15.06C16.75,13.96 16.75,13.96 16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2Z"></path>
      </svg>
    </Link>
  );
};

export default WhatsAppButton;