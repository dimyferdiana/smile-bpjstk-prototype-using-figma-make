import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface PortalProps {
  children: ReactNode;
  show: boolean;
  container?: Element;
}

export function Portal({ children, show, container }: PortalProps) {
  if (!show || typeof document === 'undefined') return null;
  
  return createPortal(children, container || document.body);
}