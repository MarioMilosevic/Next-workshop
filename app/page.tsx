import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="border border-white text-center">
      <Header />
      <p>
        <Link href="about">About</Link>
      </p>
    </div>
  );
}
