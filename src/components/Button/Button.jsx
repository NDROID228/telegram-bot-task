import "./Button.css";

export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  return <button {...props} className={"button " + props.className}></button>;
}
