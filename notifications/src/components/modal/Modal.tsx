'use client';

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import styles from './styles/modal.modules.scss'

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  
  onClose: () => void;
  onAccept: () => void;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    };
  }, [isOpen, onClose])

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={handleClickOutside} role="dialog" aria-modal="true">
      <div ref={modalRef} className={styles.content}>
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button onClick={onClose} className={styles.close} aria-label="Закрыть">
              &times;
            </button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body
  );
}