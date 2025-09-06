import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full">{children}</div>
  );
}
