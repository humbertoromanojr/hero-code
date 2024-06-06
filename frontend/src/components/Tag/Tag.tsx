import { useCallback } from "react";

type Props = {
  title: string;
};

export default function Tag({ title }: Props) {
  const randomColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360);
    const lightness = `hsl(${hue}, 100%, 95%)`;
    const darkness = `hsl(${hue}, 100%, 20%)`;

    return { lightness, darkness };
  }, []);

  return (
    <p
      style={{
        backgroundColor: randomColors().lightness,
        color: randomColors().darkness,
      }}
      className="rounded-full bg-opacity-50 px-3 text-center w-fit py-2"
    >
      {title}
    </p>
  );
}
