'use client';

import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Outer Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-8 h-8 rounded-full border-2 border-[#2563EB] flex items-center justify-center"
        >
          {/* Inner Network */}
          <div className="relative w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[#2563EB]"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2v20" />
              <path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="ml-2">
        <h1 className="text-xl font-bold text-[#132338]">RAG Solutions</h1>
        <p className="text-xs text-gray-500 hidden lg:block">Augmenter vos données, libérer votre potentiel</p>
      </div>
    </div>
  );
}

export default Logo;
