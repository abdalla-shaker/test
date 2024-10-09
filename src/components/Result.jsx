import calculatorLogo from "../assets/images/illustration-empty.svg";

export default function Result() {
  return (
    <section className="bg-slate-800 w-1/2 rounded-bl-12xl flex flex-col gap-2 justify-center items-center">
      <img src={calculatorLogo} alt="calculator image" />
      <h1 className="text-slate-50 text-2xl font-bold">Results Shown Here</h1>
      <p className="text-center w-3/4 text-slate-400">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
}
