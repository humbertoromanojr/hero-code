import backgroundImage from "../../assets/images/header.png";
import Container from "../Container/Container";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <HeaderTitle />
        <div>
          <p>Encontre livros que seja a sua cara!</p>
          <p>Lorem ipsum</p>
        </div>
      </Container>
    </header>
  );
}
