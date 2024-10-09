import { useRef, useState } from "react";

import Input from "./Input.jsx";

import calculator from "../assets/images/icon-calculator.svg";

export default function UserDetails() {
  const [mortgageDetails, setMortgageDetails] = useRef({
    isResult: undefined,
    userCalculationResults: [],
  });

  const mortgageAmount = useRef();
  const mortgageTerm = useRef();
  const mortgageRate = useRef();

  const calculateResultClickHandler = () => {
    const amount = mortgageAmount.current.value;
    const term = mortgageTerm.current.value;
    const rate = mortgageRate.current.value;
  };

  return (
    <section id="user-data" className="w-1/2 p-8">
      <header className="flex justify-between items-center">
        <h2 className="text-slate-900 text-3xl font-bold">
          Mortgage Calculator
        </h2>
        <button className="text-slate-600">Clear All</button>
      </header>
      <main className="mt-12">
        <Input title="Mortgage Amount" symbol="$" left />
        <div className="flex gap-6 mt-4">
          <div className="w-full">
            <Input title="Mortgage Term" symbol="years" />
          </div>
          <div className="w-full">
            <Input title="Mortgage Rate" symbol="%" />
          </div>
        </div>
      </main>
      <section className="mt-12">
        <span id="title">Martgage Type</span>
        <div className="flex items-center gap-3 w-full outline outline-1 rounded-sm outline-teal-400 hover:outline-teal-800 transition-all p-2 mt-3">
          <input
            type="radio"
            id="repayment"
            name="repayment"
            value="repayment"
          />
          <label htmlFor="repayment">Repayment</label>
        </div>
        <div className="flex items-center gap-3 w-full outline outline-1 rounded-sm outline-teal-400 hover:outline-teal-800 transition-all p-2 mt-2">
          <input
            type="radio"
            id="interest-only"
            name="interest-only"
            value="interest_only"
          />
          <label htmlFor="interest-only">interest only</label>
        </div>
      </section>

      <button className="flex gap-2 p-4 bg-lemon text-slate-900 mt-12 rounded-full hover:opacity-90 transition-all">
        <img src={calculator} alt="calculator image" />
        Calculate Repayments
      </button>
    </section>
  );
}
