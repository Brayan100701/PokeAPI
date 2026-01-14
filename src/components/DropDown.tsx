import "../css/Dropwdown.css";

interface Props {
  props: {
    version: { name: string };
  }[];
  name: string;
}

function DropDown({ props, name }: Props) {
  const identifier = "collapse" + name;
  return (
    <>
      <div
        className="accordion position-relative"
        id={"accordion" + identifier}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#" + identifier}
              aria-expanded="true"
              aria-controls={identifier}
            >
              Ver Game Indices
            </button>
          </h2>
          <div
            id={identifier}
            className="accordion-collapse collapse show"
            data-bs-parent={"#accordion" + identifier}
          >
            <div className="accordion-body">
              {props.map((e: any) => (
                <ListElement key={e.version.name} element={e.version.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface PropsElement {
  element: string;
}

function ListElement({ element }: PropsElement) {
  return (
    <>
      <li className="dropdown-item">{element.toUpperCase()}</li>
    </>
  );
}

export default DropDown;
