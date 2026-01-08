import { useState } from "react";

interface Props {
  pokelista: string[];
}

function InfoCard(props: Props) {
  const { pokelista } = props;
  return (
    <>
      {pokelista.map((pokemono, index) => (
        <Card key={index} nombre={pokemono} llave={index.toString()} />
      ))}
    </>
  );
}

interface CardProps {
  nombre: string;
  llave: string;
}

function Card(props: CardProps) {
  const { nombre, llave } = props;
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="card mb-3">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{counter}</p>
          <a href="#" className="btn btn-primary" onClick={() => handleClick()}>
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
