import React from "react";

type Props = {
  children: React.ReactNode;
  text: string;
  isLink?: boolean;
};

export default function Tooltip({ children, text, isLink = false }: Props) {
  return (
    <div className="group relative inline">
      {children}
      <span className="absolute w-24 left-8 -top-3 scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
