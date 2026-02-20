export default function TextArea(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea id={props.id} />
        </>
    );
}