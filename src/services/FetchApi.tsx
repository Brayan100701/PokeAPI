// interface Props {
//   nombre: string;
//   id: number;
// }

function FetchApi(nombre: string, id: number) {
  //   const { nombre, id } = props;
  const temporal = "bacalao";
  if (nombre) {
    return nombre === "all" ? temporal + "20" : temporal;
  }

  return id;
}

export default FetchApi;
