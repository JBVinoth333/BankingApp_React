import Input from "../common/Input";
import Textarea from "../common/TextArea";
import Button from "../common/Button";

export default function Form() {
    return (
        <form action="" id="signup_form">
            <div id="signup_box">
                <Input id="name" label="Name:" type="text" isRequired={true}/>
                <Input id="aadhaar" label="Aadhaar Number:" type="text" isRequired={true}/>
                <Input id="yob" label="Year of Birth:" type="number" isRequired={true}/>
                <Input id="mobile" label="Mobile Number:" type="number" isRequired={true}/>
                <Input id="email" label="Email Address:" type="password" isRequired={true}/>
                <Textarea id="address" label="Address:" isRequired={true}/>
                <Input id="balance" label="Opening Balance:" type="number" isRequired={true}/>
                <Input id="login" label="6 Digit Login Number:" type="password" isRequired={true} maxLength="6"/>
                <Input id="confirm" label="Confirm Login Number:" type="password" isRequired={true} maxLength="6"/>
                <Button id="btn_createAccount" text="Submit" type="submit"/>
            </div>
        </form>

    );
}



