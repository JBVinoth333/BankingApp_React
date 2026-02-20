export default function Button(props) {
    return (
        <button id={props.id} type={props.type} onClick={props.onClick}>{props.text}</button>
    );
}