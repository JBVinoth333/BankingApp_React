import Input from "../common/Input";
import Textarea from "../common/TextArea";
import Button from "../common/Button";
import "./SignupForm.css";
import Form from "./Form2";

export default function Form1() {

    function securitySignup() {
            // window.location.href = "/security-signup";
    }

    return (<div id="signup-container">
        <form id="signup-form">
            <div id="signup_box">
                <div>
                    <Input id="name" label="Name:" type="text" isRequired={true} />
                    <Input id="yob" label="Year of Birth:" type="number" isRequired={true} />
                    <Input id="mobile" label="Mobile Number:" type="number" isRequired={true} />
                    <Textarea id="address" label="Address:" isRequired={true} />
                    <Button id="btn_continue" text="Continue to Security Setup" type="button" onClick={securitySignup}></Button>
                </div>
            </div>
        </form>
    </div>

    );
}
