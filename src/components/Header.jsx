import logo from "../assets/investment-calculator-logo.png"

import { Children } from "react";

export default function Header () {
    return (
        <header id="header">
            <img src={logo} alt="logo" />
            <h1>Clinton's Investment Calculator for idiots</h1>
        </header>
    );
}