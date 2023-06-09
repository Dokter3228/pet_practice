import { type FunctionComponent, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

export const Portal: FunctionComponent<PortalProps> = ({ children, element = document.body }) => {
  return createPortal(children, element);
};
