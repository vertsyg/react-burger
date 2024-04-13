import { FC, PropsWithChildren } from 'react';
import styles from './modal_overlay.module.css';

interface ModalOverlayProps {
  handleClose: () => void,
}

const ModalOverlay: FC<PropsWithChildren<ModalOverlayProps>> = ({ handleClose, children }) => {
  return (
    <div onClick={handleClose} className={styles.modal_overlay}>
      {children}
    </div>
  )
}

export default ModalOverlay

