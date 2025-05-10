'use client';

import { useState, useCallback, useRef } from 'react';

interface UseDelayedHoverProps {
  openDelay?: number;
  closeDelay?: number;
}

export const useDelayedHover = ({ 
  openDelay = 0, 
  closeDelay = 200 
}: UseDelayedHoverProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const blockCloseRef = useRef(false);

  const clearTimeout = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const open = useCallback(() => {
    clearTimeout();
    if (!isOpen) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(true);
      }, openDelay);
    }
  }, [isOpen, openDelay, clearTimeout]);

  const close = useCallback(() => {
    if (blockCloseRef.current) return;
    clearTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  }, [closeDelay, clearTimeout]);

  const toggle = useCallback(() => {
    clearTimeout();
    setIsOpen((prev) => !prev);
  }, [clearTimeout]);

  const blockClose = useCallback(() => {
    blockCloseRef.current = true;
  }, []);

  const unblockClose = useCallback(() => {
    blockCloseRef.current = false;
  }, []);

  const immediateClose = useCallback(() => {
    clearTimeout();
    setIsOpen(false);
    blockCloseRef.current = false;
  }, [clearTimeout]);

  return {
    isOpen,
    open,
    close,
    toggle,
    blockClose,
    unblockClose,
    immediateClose,
  };
};
