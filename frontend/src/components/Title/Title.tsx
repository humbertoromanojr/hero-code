import classNames from "classnames";

type Props = {
  title: string;
  classname?: string;
};

export default function Title({ title, classname }: Props) {
  return (
    <div
      className={classNames([
        `md:text-5xl text-2xl border-b-4 border-b-evergreen-light text-evergreen w-fit font-bold`,
        classname,
      ])}
    >
      {title}
    </div>
  );
}
