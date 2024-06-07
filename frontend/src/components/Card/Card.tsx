import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Tag from "../Tag/Tag";

type Props = {
  id: string;
};

export default function Card({ id }: Props) {
  const navigate = useNavigate();

  const handleSelectBook = useCallback(() => {
    navigate(`/${id}`);
  }, [id, navigate]);

  return (
    <div className="grid grid-cols-3 gap-3 shadow-lg border border-gray-200 max-w-lg w-full p-3">
      <img
        src="https://m.media-amazon.com/images/I/91od-P8HkTL._AC_UF1000,1000_QL80_.jpg"
        alt=""
        className="col-span-1 w-full h-full rounded-lg"
      />
      <div className="col-span-2">
        <p className="font-bold text-2xl text-evergreen">Title</p>
        <p className="font-light text-lg text-gray-500 mb-3">Author</p>
        <Tag title="Tecnologia" classname="mb-3" />
        <p>
          <strong>Sinopse:</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida.
          In hac habitasse platea dictumst. Curabitur at massa vel nulla
          pulvinar dignissim.
        </p>
        <Button
          title="Ver mais"
          variant="light"
          classname="w-full"
          onClick={() => handleSelectBook(id)}
        />
      </div>
    </div>
  );
}
