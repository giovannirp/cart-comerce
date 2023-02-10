export function InputText(props) {
  console.log(props);
  return (
    <label htmlFor={props.nome}>
      {props.label}
      <input
        type="text"
        id={props.nome}
        name={props.nome}
        value={props.valueText}
      />
    </label>
  );
}
