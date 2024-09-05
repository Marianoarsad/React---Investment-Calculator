import { Children } from "react";
import { useState } from "react";

export default function UserInput ({ userInput, changeHandler }) {

    return (    
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>initial investment</label>
                    <input 
                        type="number" 
                        value={userInput.initialInvestment} 
                        onChange={(event) => changeHandler('initialInvestment', event.target.value)} 
                        required 
                    />
                </p>
                <p>
                    <label>annual anvestment</label>
                    <input 
                        type="number"  
                        value={userInput.annualInvestment} 
                        onChange={(event) => changeHandler('annualInvestment', event.target.value)} 
                        required 
                    />

                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected return</label>
                    <input 
                        type="number" 
                        value={userInput.expectedReturn} 
                        onChange={(event) => changeHandler('expectedReturn', event.target.value)}
                        required 
                    />
                </p>
                <p>
                    <label>duration</label>
                    <input 
                    type="number" 
                        value={userInput.duration} 
                        onChange={(event) => changeHandler('duration', event.target.value)} 
                        required 
                    />
                </p>
            </div>
        </section> 
    );
}