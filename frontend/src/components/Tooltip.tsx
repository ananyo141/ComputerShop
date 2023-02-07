import React from "react";

type Props = {
  children: React.ReactNode;
  text: string;
  isLink?: boolean;
};

export default function Tooltip({ children, text, isLink = false }: Props) {
  return (
    <div className="group relative z-30 inline">
      {children}
      <span className="absolute left-8 -top-3 w-24 scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
