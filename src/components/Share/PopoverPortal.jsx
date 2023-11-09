import { createPortal } from 'react-dom';

export default function PopoverPortal({ children }) {
  return <>{createPortal(children, document.body)}</>;
}
