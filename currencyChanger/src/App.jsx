import { useState } from 'react'
import InputBox from './InputBox'
import useCurrencyInfo from './useCurrencyInfo'
import './App.css'

function App() {
 const[amount, setAmount]=useState(0)
 const[from,setFrom]=useState("usd")
 const [to,setTo] = useState("inr")
 const [converted,setConverted]=useState(0)
 const currencyInfo=useCurrencyInfo(from)

 const options=Object.keys(currencyInfo)

 const swap =()=>{
  setFrom(to)
  setTo(from)
  setAmount(converted)
  setConverted(amount)
 }

 const convert=()=>{
  setConverted(amount*currencyInfo[to])
 }
 return (
  <div
    className="background-container"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}
  >
    <div className="content-container">
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="input-box-container">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="swap-button-container">
            <button
              type="button"
              className="swap-button"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="input-box-container">
            <InputBox
              label="To"
              amount={converted}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button type="submit" className="convert-button">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  </div>
);
}

export default App
