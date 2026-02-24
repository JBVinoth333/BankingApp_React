import Input from "../common/Input";
import Textarea from "../common/TextArea";
import Button from "../common/Button";
import "./SignupForm.css";

export default function Form() {
    function createAccount() {
        console.log("Button Clicked");
        fetch("http://localhost:8080/BankingApplication_V3/Signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                aadhaar: document.getElementById("aadhaar").value,
                yob: Number(document.getElementById("yob").value),
                mobile: document.getElementById("mobile").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                balance: Number(document.getElementById("balance").value),
                login: document.getElementById("login").value,
                confirm: document.getElementById("confirm").value
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("Account Created Successfully!");
            }).catch(error => {
                console.error(error);
                console.log("Error creating account. Please try again.");
            });
    }
    return (
        <div id="signup-container">
            <form id="signup-form">
                <div id="signup_box">
                    <div>
                        <Input id="aadhaar" label="Aadhaar Number:" type="text" isRequired={true} />
                        <Input id="email" label="Email Address:" type="email" isRequired={true} />
                        <Input id="balance" label="Opening Balance:" type="number" isRequired={true} />
                        <Input id="login" label="6 Digit Login Number:" type="password" isRequired={true} maxLength="6" />
                        <Input id="confirm" label="Confirm Login Number:" type="password" isRequired={true} maxLength="6" />
                        <Button id="btn_createAccount" text="Submit" type="submit" onClick={createAccount} />
                    </div>

                </div>
            </form>
        </div>
    );
}



