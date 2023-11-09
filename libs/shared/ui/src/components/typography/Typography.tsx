import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import './Typography.css';

export interface TypographyProps extends React.ComponentProps<'p'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption1'
    | 'caption2';
  weight?: 'normal' | 'bold';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'black';
}
export function Typography({
  children,
  as: Component = 'p',
  size = 'body1',
  weight = 'normal',
  color = 'black',
  className,
  ...rest
}: TypographyProps) {
  const mergedClasses = twMerge(
    clsx('typography-main', className, {
      [`typography__${size}`]: size,
      [`typography__${weight}`]: weight,
      [`typography__${color}`]: color,
    })
  );

  return (
    <Component className={mergedClasses} {...rest}>
      {children}
    </Component>
  );
}
export default Typography;
