import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 5,
        duration: 10,
    });

    function handleChange (inputIdentifier, newValue) {
        setUserInput( prevData => {
            return {
                ...prevData,
                [inputIdentifier]: +newValue,
            };
        });
    }

    const calculatedInvestments = calculateInvestmentResults(userInput);

    return (
    <>
        <Header />
        <UserInput 
            userInput={userInput}
            changeHandler={handleChange}
        />
        <Results 
            investmentResults={calculatedInvestments}
            initialInvestment={userInput.initialInvestment}
        />
    </>
  )
}

export default App


