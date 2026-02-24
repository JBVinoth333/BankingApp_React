import "./SignupForm.css";
import { Link } from "react-router-dom";

export default function Header({bankName}) {
    return (
        <header>
            <div className="logo-div">
                <Link to="/signup">
                <div className="logo"><i className="fa-solid fa-piggy-bank"></i></div>
                </Link>
                <Link to="/signup"><div className="bank-name rubik-black">{bankName}</div></Link>
            </div>
            <div className="login-link rubik-medium">
                <div className="rubik-small">Already have an account?</div>
                <Link to="/login">Log in</Link>
            </div>
        </header>
    );
}