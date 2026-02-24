import Input from "../common/Input";
import Textarea from "../common/TextArea";
import Button from "../common/Button";
import "./SignupForm.css";

export default function Form(props) {
    function createAccount() {
        console.log("Button Clicked");
        console.log(props.state.name);
        console.log(props.state.aadhaar);
        console.log(props.state.yob);
        console.log(props.state.mobile);
        console.log(props.state.email);
        console.log(props.state.address);
        console.log(props.state.balance);
        console.log(props.state.login);
        console.log(props.state.confirm);
        fetch("http://localhost:8080/BankingApplication_V3/Signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: props.state.name,
                aadhaar: props.state.aadhaar,
                yob: Number(props.state.yob),
                mobile: props.state.mobile,
                email: props.state.email,
                address: props.state.address,
                balance: Number(props.state.balance),
                login: props.state.login,
                confirm: props.state.confirm
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("Account Created Successfully!");
            }).catch(error => {
                console.error(error);
                console.log("Error creating account. Please try again.");
            });

        props.state.setName("");
        props.state.setAadhaar("");
        props.state.setYob("");
        props.state.setMobile("");
        props.state.setEmail("");
        props.state.setAddress("");
        props.state.setBalance("");
        props.state.setLogin("");
        props.state.setConfirm("");
    }

    function backToForm1() {
        props.state.setShowForm1(true);
        document.getElementById("name").value = props.state.name;
        document.getElementById("yob").value = props.state.yob;
        document.getElementById("mobile").value = props.state.mobile;
        document.getElementById("address").value = props.state.address;
    }
    return (
        <form id="signup-form">
            <Input id="aadhaar" label="Aadhaar Number:" placeholder="1234 5678 9012" type="text" isRequired={true} value={props.state.aadhaar} onChange={(e) => props.state.setAadhaar(e.target.value)} />
            <Input id="email" label="Email Address:" placeholder="vinoth@example.com" type="email" isRequired={true} value={props.state.email} onChange={(e) => props.state.setEmail(e.target.value)} />
            <Input id="balance" label="Opening Balance:" placeholder="1000" type="number" isRequired={true} value={props.state.balance} onChange={(e) => props.state.setBalance(e.target.value)} />
            <Input id="login" label="6 Digit Login Number:" placeholder="123456" type="password" isRequired={true} maxLength="6" value={props.state.login} onChange={(e) => props.state.setLogin(e.target.value)} />
            <Input id="confirm" label="Confirm Login Number:" placeholder="123456" type="password" isRequired={true} maxLength="6" value={props.state.confirm} onChange={(e) => props.state.setConfirm(e.target.value)} />
            <div>
                <Button id="btn-back" text="Back" type="button" onClick={backToForm1}></Button>
                <Button id="btn-createAccount" text="Submit" type="submit" onClick={createAccount} />
            </div>
        </form>
    );
}



