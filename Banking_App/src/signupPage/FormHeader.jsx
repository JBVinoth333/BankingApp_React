import { useState } from "react";

export default function FormHeader({bankName}) {
    const [step, setStep] = useState(1);
    const [percentage, setPercentage] = useState(80);
    return (
        <div id="form-header">
            <div id="progress-bar-div">
                <div id="progress">
                    <div>STEP {step} OF 2</div>
                    <div>{percentage}% COMPLETE</div>
                </div>
                <div id="progress-bar">
                    <div id="progress-bar-filled" style={{width: `${percentage}%`}}></div>
                </div>
            </div>
            <div id="title-div">
                <div className="form-title rubik-medium">Join {bankName}</div>
                <div className="rubik-light title-para">Experience bank-grade security for your digital assets.</div>
            </div>
        </div>
    );
}