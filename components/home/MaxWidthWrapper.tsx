import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface MaxWidthWrapperProps {
  maxWidth?: string;
  className?: string;
}

const MaxWidthWrapper = ({
  children,
  maxWidth,
  className,
}: PropsWithChildren<MaxWidthWrapperProps>) => {
  return (
    <div
      className={classNames(
        'w-full mx-auto',
        className,
        !maxWidth ? 'max-w-[80vw]' : `max-w-[${maxWidth}]`,
      )}
    >
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
