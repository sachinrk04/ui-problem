import React, { useEffect, useState } from 'react';
import "./EMICalculator.scss";
import TextInput from '../../Components/EMICalculator/TextInput';
import SliderInput from '../../Components/EMICalculator/SliderInput';

export default function EMICalculator() {
    const [cost, setCost] = useState(100000);
    const [interest, setInterest] = useState(10);
    const [fee, setFee] = useState(1);
    const [downPayment, setDownPayment] = useState((cost / 7).toFixed());
    const [installment, setInstallment] = useState('');
    const [tenure, setTenure] = useState(12);
    const tenureList = [12, 24, 36, 48, 60];

    function claculateEmi() {
        let p = cost - downPayment + (fee * downPayment) / 100;
        let r = interest / 100;
        let n = tenure / 12;
        const EMI = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        return Number(EMI / 12).toFixed(0);
    }
    const EMI = claculateEmi();

    useEffect(() => {
        setInstallment(EMI);
    });

    return (
        <div className='EMI-calculator'>
            <h1>EMI calculator</h1>
            <TextInput
                title="Total cost of Asset"
                getvalue={setCost}
                defaultv={cost}
            />
            <TextInput
                title="interest rate in % "
                getvalue={setInterest}
                defaultv={interest}
            />
            <TextInput
                title="Processsing fee in % "
                getvalue={setFee}
                defaultv={fee}
            />

            <SliderInput
                title="Down Payment "
                max={(cost / 2).toFixed()}
                min={(cost / 10).toFixed()}
                defaultv={downPayment}
                getvalue={setDownPayment}
                step="20"
            />

            <SliderInput 
                title="Loan per month" 
                max="50" 
                min="0" 
                defaultv="25"
                getvalue={setDownPayment} 
                step="1" 
            />

            <label>Tenure in months</label>
            <div className="Buttons">
                {tenureList.map((i) => (
                <div
                    className={'Button ' + (i === tenure ? ' active' : '')}
                    key={i}
                    active={i === tenure}
                    onClick={() => setTenure(i)}
                >
                    {i}
                </div>
                ))}
            </div>
            <hr />
            <label>
                Final Downpayment :
                {Number(downPayment) + Number((fee * downPayment) / 100)}
            </label>
            <label>Final installment per month: {installment}</label>
        </div>
    )
};
