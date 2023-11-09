export type MoveDirection =
  | 'fade-in'
  | 'fade-out'
  | 'zoom-in'
  | 'zoom-out'
  | 'slide-up'
  | 'slide-down'
  | 'slide-right'
  | 'slide-left';

export interface DialogProps {
  open: boolean;
  onClose(): void;
  children: React.ReactElement;
  enter?: {
    default?: MoveDirection;
    sm?: MoveDirection;
    md?: MoveDirection;
    lg?: MoveDirection;
  };
  leave?: {
    default?: MoveDirection;
    sm?: MoveDirection;
    md?: MoveDirection;
    lg?: MoveDirection;
  };
  classes?: {
    root: string;
    box: string;
  };
}
export const generateDefaultEnterAnimation = (
  enterAnimation?: MoveDirection
) => {
  switch (enterAnimation) {
    case 'slide-up':
      return 'animate-slide-up-enter';
    case 'slide-down':
      return 'animate-slide-down-enter';
    case 'slide-right':
      return 'animate-slide-right-enter';
    case 'slide-left':
      return 'animate-slide-left-enter';
    case 'zoom-in':
      return 'animate-zoom-in';
    default:
      return 'animate-fade-in';
  }
};
export const generateSMEnterAnimation = (
  enterAnimation?: MoveDirection
) => {
  switch (enterAnimation) {
    case 'slide-up':
      return 'sm:animate-slide-up-enter';
    case 'slide-down':
      return 'sm:animate-slide-down-enter';
    case 'slide-right':
      return 'sm:animate-slide-right-enter';
    case 'slide-left':
      return 'sm:animate-slide-left-enter';
    case 'zoom-in':
      return 'sm:animate-zoom-in';
    default:
      return 'sm:animate-fade-in';
  }
};
export const generateMDEnterAnimation = (
  enterAnimation?: MoveDirection
) => {
  switch (enterAnimation) {
    case 'slide-up':
      return 'md:animate-slide-up-enter';
    case 'slide-down':
      return 'md:animate-slide-down-enter';
    case 'slide-right':
      return 'md:animate-slide-right-enter';
    case 'slide-left':
      return 'md:animate-slide-left-enter';
    case 'zoom-in':
      return 'md:animate-zoom-in';
    default:
      return 'md:animate-fade-in';
  }
};
export const generateDefaultLeaveAnimation = (
  enterAnimation?: MoveDirection
) => {
  switch (enterAnimation) {
    case 'slide-up':
      return 'animate-slide-up-leave';
    case 'slide-down':
      return 'animate-slide-down-leave';
    case 'slide-right':
      return 'animate-slide-right-leave';
    case 'slide-left':
      return 'animate-slide-left-leave';
    case 'zoom-out':
      return 'animate-zoom-out';
    default:
      return 'animate-fade-out';
  }
};
export const generateSMLeaveAnimation = (
  enterAnimation?: MoveDirection
) => {
  switch (enterAnimation) {
    case 'slide-up':
      return 'sm:animate-slide-up-leave';
    case 'slide-down':
      return 'sm:animate-slide-down-leave';
    case 'slide-right':
      return 'sm:animate-slide-right-leave';
    case 'slide-left':
      return 'sm:animate-slide-left-leave';
    case 'zoom-out':
      return 'sm:animate-zoom-out';
    default:
      return 'sm:animate-fade-out';
  }
};
export const generateMDLeaveAnimation = (
  enterAnimation?: MoveDirection
) => {
  switch (enterAnimation) {
    case 'slide-up':
      return 'md:animate-slide-up-leave';
    case 'slide-down':
      return 'md:animate-slide-down-leave';
    case 'slide-right':
      return 'md:animate-slide-right-leave';
    case 'slide-left':
      return 'md:animate-slide-left-leave';
    case 'zoom-out':
      return 'md:animate-zoom-out';
    default:
      return 'md:animate-fade-out';
  }
};
export const generateAlignment = (enterAnimation?: MoveDirection) => {
  switch (enterAnimation) {
    case 'slide-up':
      return 'items-start';
    case 'slide-down':
      return 'items-end';
    case 'slide-right':
      return 'items-center justify-start';
    case 'slide-left':
      return 'items-center justify-end';
    case 'zoom-out':
      return 'items-center justify-center';
    default:
      return 'items-center justify-center';
  }
};
