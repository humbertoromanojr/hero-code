import classNames from "classnames";

type Props = {
  title: string;
  classname?: string;
  variant?: "light" | "dark";
  onClick?: (title: any) => void;
};

export default function Button({
  title,
  classname,
  variant = "dark",
  onClick,
}: Props) {
  return (
    <button
      className={classNames([
        `bg-evergreen-light px-6 py-3 rounded-lg shadow font-medium mt-3`,
        variant === "dark" && `bg-evergreen-light  text-white`,
        variant === "light" &&
          `bg-white border-evergreen-light border-2 text-evergreen-light`,
        classname,
      ])}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
