import "../css/Dropwdown.css";

interface Props {
  texto: string;
}

function DropDown({ texto }: Props) {
  return (
    <>
      <div className="dropdown">
        Juegos
        <ul className="dropdown-content">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>
    </>
  );
}

export default DropDown;
