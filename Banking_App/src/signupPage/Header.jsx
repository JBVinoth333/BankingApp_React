import "./SignupForm.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <div><i className="fa-solid fa-piggy-bank"></i></div>
                <div>Vinoth Bank</div>
            </div>
            <div className="login-link">
                <div>Already have an account?</div>
                <Link to="/login">Log in</Link>
            </div>
        </header>
    );
}