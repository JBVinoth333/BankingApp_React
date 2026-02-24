export default function TextArea(props) {
    return (
        <div className="input-group">
            <label htmlFor={props.id}>{props.label}</label>
            <textarea id={props.id} />
        </div>
    );
}