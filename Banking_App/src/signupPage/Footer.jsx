export default function Footer({bankName}) {
    return (
        <footer id="footer" className="rubik-small">
            <div className="footer-text">
                    <div><i className="fa-solid fa-lock"></i></div>
                    <div>Your connection to {bankName} is private and secure.</div>
                </div>
                <div>© 2026 {bankName} J.B. All rights reserved.</div>
        </footer>
    );
}