import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import './button.css';
import BouncingDots from '../bounce-loading/BouncingDots';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
export function Button({
  children,
  variant = 'contained',
  color = 'primary',
  className,
  loading,
  disabled,
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) {
  


  const mergedClasses = twMerge(
    clsx('btn__main', className, {
      [`btn__main--${color}`]: color,
      [`btn__main--${variant}`]: variant,
      btn__flexible: startIcon || endIcon,
    })
  );
  return (
    <button className={mergedClasses} disabled={disabled || loading} {...rest}>
      {startIcon && startIcon}
      {loading ? <BouncingDots size={'small'} /> : children}
      {endIcon && endIcon}
    </button>
  );
}
export default Button;
