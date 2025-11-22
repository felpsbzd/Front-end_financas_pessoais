// CORREÇÃO: Adicionamos "type" logo após o import
import type { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Card = ({ children, className = "", style }: CardProps) => {
  return (
    <div className={`ui-card ${className}`} style={style}>
      {children}
    </div>
  );
};
