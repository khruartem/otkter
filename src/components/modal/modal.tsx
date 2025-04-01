import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { TModalProps } from './types';
import { ModalUI } from '../ui/modal';
import { scrollToTop } from '../../utils/scrollToTop';
import { useLocation } from 'react-router-dom';

const modalRoot = document.getElementById('root-modal');

export const Modal: FC<TModalProps> = memo(({ type, onClose, children }) => {
  const location = useLocation();
  console.log(location);
  const isDirectLink = location.state ? false : true;
  
  useEffect(() => {
    scrollToTop("instant");
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI type={type} onClose={onClose} isDirectLink={isDirectLink}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
});
