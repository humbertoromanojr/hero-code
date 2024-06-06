type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <div className="md:text-5xl text-2xl border-b-4 border-b-evergreen-light text-evergreen w-fit font-bold">
      {title}
    </div>
  );
}
