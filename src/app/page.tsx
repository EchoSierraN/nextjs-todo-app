import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>The Emperor protects.</h1>
      </header>
      <Link href={"/new"}>Click new</Link>
    </>
  );
}
