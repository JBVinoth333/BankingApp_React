export default function Button(props) {
    return (
        <button id={props.id} className="rubik-medium" type={props.type} onClick={props.onClick}>{props.text}</button>
    );
}