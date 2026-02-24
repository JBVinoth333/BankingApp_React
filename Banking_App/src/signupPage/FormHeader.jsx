import { useState } from "react";

export default function FormHeader({bankName}) {
    const [step, setStep] = useState(1);
    const [percentage, setPercentage] = useState(0);
    return (
        <div id="form-header">
            <div>
                <div>
                    <div>STEP {step} OF 2</div>
                    <div>{percentage}% COMPLETE</div>
                </div>
                <div>
                    <div className="form-1"></div>
                    <div className="form-2"></div>
                </div>
            </div>
            <div id="title-div">
                <div className="form-title rubik-medium">Join {bankName}</div>
                <div>Experience bank-grade security for your digital assets.</div>
            </div>
        </div>
    );
}