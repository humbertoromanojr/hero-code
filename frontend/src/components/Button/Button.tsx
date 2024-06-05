import classNames from "classnames";

type Props = {
  title: string;
  classname?: string;
  variant: "light" | "dark";
};

export default function Button({ title, classname, variant = "dark" }: Props) {
  return (
    <button
      className={classNames([
        `bg-evergreen-light px-6 py-3 rounded-lg shadow text-white font-medium mt-3`,
        variant === "dark" && `bg-evergreen-light`,
        variant === "light" &&
          `text-evergreen-light bg-white border-evergreen-light border-2`,
        classname,
      ])}
    >
      {title}
    </button>
  );
}
