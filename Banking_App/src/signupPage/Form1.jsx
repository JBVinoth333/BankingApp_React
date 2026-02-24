import Input from "../common/Input";
import Textarea from "../common/TextArea";
import Button from "../common/Button";
import Terms from "./Terms";
import "./SignupForm.css";

export default function Form1(props) {

    function securitySignup() {
        props.state.setShowForm1(false);
        document.getElementById("aadhaar").value = props.state.aadhaar;
        document.getElementById("email").value = props.state.email;
        document.getElementById("balance").value = props.state.balance;
        document.getElementById("login").value = props.state.login;
        document.getElementById("confirm").value = props.state.confirm;
    }

    return (
            <form id="signup-form">
                <Input id="name" label="Name:" placeholder="Vinoth B" type="text" isRequired={true} value={props.state.name} onChange={(e) => props.state.setName(e.target.value)} />
                <Input id="yob" label="Year of Birth:" placeholder="2007" type="number" isRequired={true} value={props.state.yob} onChange={(e) => props.state.setYob(e.target.value)} />
                <Input id="mobile" label="Mobile Number:" placeholder="+91 89252 34723" type="number" isRequired={true} value={props.state.mobile} onChange={(e) => props.state.setMobile(e.target.value)} />
                <Textarea id="address" label="Address:" placeholder="461, Church Street, City, State, Country" isRequired={true} value={props.state.address} onChange={(e) => props.state.setAddress(e.target.value)} />
                <Terms/>
                <Button id="btn_continue" text="Continue to Security Setup" type="button" onClick={securitySignup}></Button>
            </form>
    );
}
