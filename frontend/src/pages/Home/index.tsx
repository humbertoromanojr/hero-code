import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const genderBooks = [
  "Ação",
  "Aventura",
  "Biográfica",
  "Tecnologia",
  "Comédia",
  "Drama",
  "Ficção",
];

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />

        {genderBooks.map((book) => (
          <Button title={book} variant="light" />
        ))}
      </Container>
    </>
  );
}
