import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2">
            Fale com a THCOMERCIO
            <div className="absolute top-full right-4 -mt-1">
              <div className="border-8 border-transparent border-t-gray-900" />
            </div>
          </div>
        )}

        {/* Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </a>
      </div>
    </div>
  );
};
