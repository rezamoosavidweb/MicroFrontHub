import clsx from 'clsx';
import { ReactNode, forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import './text-field.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inActiveState?: boolean;
  classes?: {
    fieldset?: string;
    main?: string;
    input?: string;
    label?: string;
    group?: string;
  };

  inputAdornment?: {
    Body: ReactNode;
  };
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      classes,
      className,
      onClickCapture,
      inputAdornment,
      inActiveState,
      ...inputProps
    },
    ref
  ) => {
    const _name = useId();

    return (
      <div
        className={twMerge(
          clsx('textfield__main group/textfield', classes?.main, {
            focusedState: inActiveState,
          })
        )}
        onClickCapture={onClickCapture}
      >
        <input
          id={_name}
          className={twMerge(
            clsx('textfield__input', classes?.input, {
              'textfield__input--adornment': inputAdornment?.Body,
            })
          )}
          placeholder=" "
          ref={ref}
          {...inputProps}
        />
        <fieldset
          className={twMerge(
            clsx(`textfield__fieldset`, classes?.fieldset, {
              'textfield__fieldset--error': error,
            })
          )}
        >
          {label && (
            <legend className={twMerge(clsx('textfield__legend'))}>
              <span className="visible inline-block text-m opacity-0">
                {label}
              </span>
            </legend>
          )}
        </fieldset>
        <label
          className={twMerge(
            clsx(
              `textfield__label`,
              {
                'text-red-6': error,
                'text-neutral-7': !error,
                '-top-[18%] text-m ': inputProps.value,
                'top-[18%]': !inputProps.value,
                textfield__disabled: inputProps.disabled,
              },
              classes?.label
            )
          )}
          data-shrink="false"
          htmlFor={_name}
          id={`${_name}-label`}
        >
          {label}
        </label>
        <div className="textfield__adornment">
          {inputAdornment?.Body && inputAdornment?.Body}
        </div>
      </div>
    );
  }
);

export default TextField;
