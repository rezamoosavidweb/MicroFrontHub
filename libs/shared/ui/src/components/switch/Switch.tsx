import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import './switch.css';

export interface SwitchProps
  extends Omit<React.ComponentProps<'input'>, 'size'> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  trackHeight?: string;
  trackWidth?: string;
  thumbSize?: string;
  offsetX?: string;
  duration?: string;
}
export function Switch({
  children,
  color = 'primary',
  className,
  size = 'medium',
  disabled,
  trackHeight,
  trackWidth,
  thumbSize,
  offsetX,
  duration,
  label,
  ...rest
}: SwitchProps) {
  return (
    <label
      className={twMerge(
        clsx('switch__root', {
          'switch__root--disabled': disabled,
          'switch__root--padding ': !label,
        })
      )}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className="switch__input"
        {...rest}
      />
      <div
        className="switch__box"
        style={
          {
            '--switch-track-height': trackHeight,
            '--switch-track-width': trackWidth,
            '--switch-thumb-size': thumbSize,
          } as React.CSSProperties
        }
      >
        <div
          className={twMerge(
            clsx('switch__track', {
              [`switch__track--${color}`]: color,
              [`switch__track--${size}`]: size,
              [`switch__track--disabled`]: disabled,
            })
          )}
          style={
            {
              '--switch-track-height': trackHeight,
              '--switch-track-width': trackWidth,
              '--switch-thumb-size': thumbSize,
              '--switch-duration': duration,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={twMerge(
            clsx('switch__thumb', {
              [`switch__thumb--${color}`]: color,
              [`switch__thumb--${size}`]: size,
              [`switch__thumb--disabled`]: disabled,
            })
          )}
          style={
            {
              '--switch-thumb-size': thumbSize,
              '--switch-offsetX': offsetX,
              '--switch-duration': duration,
            } as React.CSSProperties
          }
        ></div>
      </div>
      {label}
    </label>
  );
}
export default Switch;
