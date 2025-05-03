import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="border border-white min-h-screen bg-slate-800">
      <Header />
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share</Link>
      <Link href="/community">Community</Link>
    </div>
  );
}
