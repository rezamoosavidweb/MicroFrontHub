/* eslint-disable react/jsx-no-useless-fragment */
import React, { cloneElement, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './dialog.css';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import {
  DialogProps,
  generateDefaultEnterAnimation,
  generateDefaultLeaveAnimation,
  generateMDEnterAnimation,
  generateMDLeaveAnimation,
  generateSMEnterAnimation,
  generateSMLeaveAnimation,
} from './helper';

export function Dialog({
  open,
  onClose,
  enter = { default: 'zoom-in' },
  leave = { default: 'zoom-out' },
  children,
  classes,
}: DialogProps) {
  const dialog = React.useRef<HTMLDivElement>(null);
  const dialogBox = React.useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (dialog.current && dialogBox.current) {
      //remove
      document.body.removeAttribute('style');
      dialog.current.classList.remove('animate-fade-in-dialog');
      dialog.current.classList.add('animate-fade-out');
      dialogBox.current.className =
        'dialog__box' +
        ' ' +
        generateDefaultLeaveAnimation(leave?.default) +
        ' ' +
        generateSMLeaveAnimation(leave?.sm) +
        ' ' +
        generateMDLeaveAnimation(leave?.md);

      setTimeout(() => {
        onClose();
      }, 500);
    }
  }, [onClose, leave]);

  React.useLayoutEffect(() => {
    if (dialog.current && dialogBox.current) {
      document.body.setAttribute('style', 'overflow:hidden');
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        handleClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeAttribute('style');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, enter]);

  return (
    <>
      {open &&
        createPortal(
          <div
            className={twMerge(
              clsx('dialog__root animate-fade-in-dialog', classes?.root, {
                '!items-start':
                  enter?.default === 'slide-up' || enter?.sm === 'slide-up',
                '!items-end':
                  enter?.default === 'slide-down' || enter?.sm === 'slide-down',
              })
            )}
            ref={dialog}
          >
            <div className="dialog__backdrop" onClick={handleClose} />
            <div
              ref={dialogBox}
              className={twMerge(
                clsx('dialog__box', classes?.box, {
                  [`${generateDefaultEnterAnimation(enter?.default)}`]:
                    enter?.default,
                  [`${generateSMEnterAnimation(enter?.sm)}`]: enter?.sm,
                  [`${generateMDEnterAnimation(enter?.md)}`]: enter?.md,
                })
              )}
            >
              {children && cloneElement(children, { onClose: handleClose })}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Dialog;
