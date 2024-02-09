import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">NEW</h1>
      </header>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        ></input>
        <div className="flex gap-1 justify-end">
          <Link
            href={".."}
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline-none hover:bg-slate-700 focus-within:bg-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline-none hover:bg-slate-700 focus-within:bg-slate-700"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
