import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { TModalProps } from './types';
import { ModalUI } from '../ui/modal';
import { scrollToTop } from '../../utils/scrollToTop';

const modalRoot = document.getElementById('root-modal');

export const Modal: FC<TModalProps> = memo(({ type, onClose, children }) => {
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
    <ModalUI type={type} onClose={onClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
});
