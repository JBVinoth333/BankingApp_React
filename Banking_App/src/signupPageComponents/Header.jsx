import "./SignupForm.css";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <div><i class="fa-solid fa-piggy-bank"></i></div>
                <div>Vinoth Bank</div>
            </div>
            <div className="login-link">
                <div>Already have an account?</div>
                <Link to="/login">Login to</Link>
            </div>
        </header>
    );
}