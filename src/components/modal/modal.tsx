import { FC, PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom';
import ModalOverlay from './modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css'

const modalRoot = document.getElementById("modals")!

interface ModalProps {
  title?: string,
  handleClose: () => void,
  // children: ReactNode
}

const Modal:  FC<PropsWithChildren<ModalProps>> = ({title, handleClose, children}) => {

  useEffect(() => {
    const onESCpress = (event:KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }
  
    document.addEventListener('keydown', onESCpress)
  
    return () => {
      document.removeEventListener('keydown', onESCpress)
    };
  }, [handleClose]);

  return createPortal(
    (
      <ModalOverlay handleClose={handleClose}>
        <div onClick={e => e.stopPropagation} className={styles.modal}>
            <div>
              <h1>{title}</h1>
              <CloseIcon type='primary' onClick={handleClose}/>
            </div>
            {children}
        </div>
      </ModalOverlay>
    ), modalRoot
  )
}

export default Modal