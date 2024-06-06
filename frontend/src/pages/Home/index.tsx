import { useCallback, useState } from "react";

import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

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
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const handleSelect = useCallback(
    (title: string) => {
      console.log("==> home: ", title);
      if (selectedGender.includes(title)) {
        const removeGender = selectedGender.filter((item) => item !== title);
        setSelectedGender(removeGender);
      } else {
        setSelectedGender([...selectedGender, title]);
      }
    },
    [selectedGender]
  );

  return (
    <div className="mb-5">
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />

        <div className="gap-8 grid md:grid-cols-8 grid-cols-4 my-6">
          {genderBooks.map((book) => (
            <Button
              title={book}
              variant={selectedGender.includes(book) ? "dark" : "light"}
              onClick={() => handleSelect(book)}
            />
          ))}
        </div>

        <div className="py-7">
          <p className="text-evergreen font-semibold text-2xl">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>

          <input
            type="text"
            placeholder="Eu gostaria de ler..."
            className="outline-none shadow-lg border border-gray-100 rounded-3xl w-full px-6 py-3 mt-3"
          />
        </div>

        <Title title="Livros recomendados" />

        <Card />
      </Container>
    </div>
  );
}
