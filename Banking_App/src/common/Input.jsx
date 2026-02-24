import "./Common.css"

export default function Input(props) {
    console.log(props.id+" "+props.maxLength);

    return (
        <div className="input-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} required={props.isRequired} maxLength={props.maxLength} />
        </div>
    );
}