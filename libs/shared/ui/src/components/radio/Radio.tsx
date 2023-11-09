import { ReactNode, forwardRef, useId } from 'react';
import './radio.css';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export interface RadioProps extends React.ComponentProps<'input'> {
  label: string | ReactNode;
  color: 'primary' | 'secondary';
  classes?: {
    root?: string;
    label?: string;
  };
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, name, classes, disabled, color = 'primary', ...rest }, ref) => {
    const id = useId();
    return (
      <div className={twMerge(clsx('radio__root', classes?.root))}>
        <input
          id={id}
          type="radio"
          name={name}
          disabled={disabled}
          className={twMerge(
            clsx('radio__input', classes?.label, {
              'radio__input--disabled': disabled,
              [`radio__input--${color}`]: color,
            })
          )}
          ref={ref}
          {...rest}
        />
        <label
          htmlFor={id}
          className={twMerge(
            clsx('radio__label', classes?.label, {
              'radio__label--disabled': disabled,
            })
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);
export default Radio;
