import { forwardRef } from "react";

type Props = {
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...rest }: Props, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="outline-none shadow-lg border border-gray-100 rounded-3xl w-full px-6 py-3 mt-3"
        {...rest}
      />
    );
  }
);
