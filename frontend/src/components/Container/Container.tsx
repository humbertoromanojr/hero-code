import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="px-3 md:px-5 py-4 max-w-7xl w-full mx-auto">{children}</div>
  );
}
