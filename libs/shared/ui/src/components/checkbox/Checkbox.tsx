import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import './checkbox.css';
import { CheckIcon } from '../icons';

export interface CheckboxProps
  extends Omit<React.ComponentProps<'input'>, 'size'> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}
export function Checkbox({
  children,
  color = 'primary',
  className,
  size = 'medium',
  disabled,
  label,
  ...rest
}: CheckboxProps) {
  return (
    <label
      className={twMerge(
        clsx('checkbox__root', {
          'checkbox__root--disabled': disabled,
          'checkbox__root--padding ': !label,
        })
      )}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className="checkbox__input peer"
        {...rest}
      />
      <div
        className={twMerge(
          clsx('checkbox__box', {
            [`checkbox__box--${color}`]: color,
            [`checkbox__box--${size}`]: size,
            [`checkbox__box--disabled`]: disabled,
          })
        )}
      >
        <CheckIcon />
      </div>
      {label}
    </label>
  );
}
export default Checkbox;
