import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { TModalProps } from './types';
import { ModalUI } from '../ui/modal';

const modalRoot = document.getElementById('root-modal');

export const Modal: FC<TModalProps> = memo(({ onClose, children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
});
