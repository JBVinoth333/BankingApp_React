import "./Common.css"

export default function Input(props) {
    return (
        <div className="input-group rubik-light">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} required={props.isRequired} maxLength={props.maxLength} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
        </div>
    );
}