import Form1 from "./Form1";
import Form2 from "./Form2";
import Header from "./Header";
import "./SignupForm.css";

export default function SignupPage1() {
    return (
        <div id="signup-page">
            <Header />
            <Form1 isComplete={false} />
        </div>
    );
}