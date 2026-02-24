import "./SignupForm.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="logo-div">
                <Link to="/signup">
                <div className="logo"><i className="fa-solid fa-piggy-bank"></i></div>
                </Link>
                <Link to="/signup"><div className="bank-name">Vinoth Bank</div></Link>
            </div>
            <div className="login-link">
                <div>Already have an account?</div>
                <Link to="/login">Log in</Link>
            </div>
        </header>
    );<div className="bank-name">Vinoth Bank</div>
}