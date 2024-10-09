export default function Input({ title, symbol, left }) {
  return (
    <>
      <label
        htmlFor={title.replaceAll(" ", "_").toUpperCase()}
        className="block mb-2"
      >
        {title}
      </label>
      <div className="input-and-symbol-container flex outline outline-1 rounded-sm outline-teal-400 hover:outline-teal-800 transition-all">
        {left ? (
          <>
            <p className="py-1 px-3 bg-teal-100 content-center text-slate-500">
              {symbol}
            </p>
            <input
              name={title.replaceAll(" ", "_").toUpperCase()}
              id={title.replaceAll(" ", "_").toUpperCase()}
              className="w-full focus-within:outline-none px-2 text-slate-800 font-bold"
            />
          </>
        ) : (
          <>
            <input
              name={title.replaceAll(" ", "_").toUpperCase()}
              id={title.replaceAll(" ", "_").toUpperCase()}
              className="focus-within:outline-none px-2 w-full text-slate-800 font-bold"
            />
            <p className="py-1 px-4 bg-teal-100 content-center text-slate-500">
              {symbol}
            </p>
          </>
        )}
      </div>
    </>
  );
}
