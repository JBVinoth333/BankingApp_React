import Form1 from "./Form1";
import Form2 from "./Form2";
import Header from "./Header";
import Footer from "./Footer";
import FormHeader from "./FormHeader";
import "./SignupForm.css";
import { useState } from "react";

export default function SignupPage1() {
    const bankName = "ZS Bank";
    const [showForm1, setShowForm1] = useState(true);
    const [name, setName] = useState("");
    const [yob, setYob] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [aadhaar, setAadhaar] = useState("");
    const [email, setEmail] = useState("");
    const [balance, setBalance] = useState("");
    const [login, setLogin] = useState("");
    const [confirm, setConfirm] = useState("");
    return (
        <div id="signup-page">
            <Header bankName={bankName} />
            <div id="signup-container">
                <FormHeader bankName={bankName} />
                <div id="signup-form">
                    {showForm1 ? <Form1 state={{ showForm1, setShowForm1, name, setName, yob, setYob, mobile, setMobile, address, setAddress, aadhaar, setAadhaar, email, setEmail, balance, setBalance, login, setLogin, confirm, setConfirm }} /> : <Form2 state={{ showForm1, setShowForm1, name, setName, yob, setYob, mobile, setMobile, address, setAddress, aadhaar, setAadhaar, email, setEmail, balance, setBalance, login, setLogin, confirm, setConfirm }} />}
                </div>
            </div>
            <Footer bankName={bankName} />
        </div>
    );
}