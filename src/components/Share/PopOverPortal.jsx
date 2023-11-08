import { createPortal } from 'react-dom';

export default function PopOverPortal({ children }) {
  return <>{createPortal(children, document.body)}</>;
}
