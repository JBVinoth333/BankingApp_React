import "./SignupForm.css";

export default function Terms() {
    return (
        <div id="terms-div">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="rubik-light">I agree to the Terms of Service and Privacy Policy. I understand my data is protected by ZS-333 encryption.</label>
        </div>
    );
}