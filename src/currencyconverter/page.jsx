import React, { useState } from 'react'
import InputBox from './InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './style.css'

export default function Currency() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo)
    // console.log(options)

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
        console.log(convertedAmount)
    }


    return (
        <div className='main'>
            <h1>currency converter</h1>
            <div className="">
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                }}>
                    <div className="">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>

                    <div className="">
                        <button>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
