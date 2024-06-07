import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Title from "../../components/Title/Title";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <Container>
      <HeaderTitle />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">Title book</h2>
          <p className="text-xl text-gray-500 font-light py-5">Author</p>
          <p className="text-evergreen mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            magna mollis, volutpat metus ut, convallis nisi. Sed vel neque
            scelerisque, pretium magna vel, tempus massa. Phasellus vel erat a
            orci egestas ultricies non in erat. Curabitur sodales et enim in
            rutrum. Nunc tortor nunc, posuere eget convallis non, posuere vel
            libero. Quisque tempus feugiat auctor. Pellentesque in libero leo.
            Cras dui libero, posuere eu maximus et, sollicitudin eu quam. Fusce
            dapibus arcu nec justo accumsan lobortis. Cras velit mauris, varius
            ac tellus eget, tincidunt sagittis orci. Integer ullamcorper
            consectetur eros ac gravida. Cras blandit eros venenatis massa
            sodales, id pretium leo suscipit. Vivamus id lectus id lorem ornare
            aliquet eget nec eros. Maecenas et fermentum risus, ac interdum
            arcu. In odio erat, blandit vitae metus nec, fermentum porta lectus.
          </p>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/91od-P8HkTL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <Title title="Recomendações com base nesse livro" classname="my-4" />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-7">
        <Card id="123" />
        <Card id="123" />
        <Card id="123" />
        <Card id="123" />
      </div>
    </Container>
  );
}
