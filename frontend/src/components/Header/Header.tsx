import backgroundImage from "../../assets/images/header.png";
import Button from "../Button/Button";
import Container from "../Container/Container";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-auto bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />
        <div className="mt-28">
          <p className="text-6xl font-bold text-evergreen">
            Encontre livros <br /> que seja a sua cara!
          </p>
          <p className="my-5 text-gray-500">Lorem ipsum</p>
          <Button title="Pesquisar Livros" />
        </div>
      </Container>
    </header>
  );
}
