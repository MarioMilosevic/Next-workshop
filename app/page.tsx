import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="border border-white flex flex-col items-center justify-center min-h-screen">
      <Header />
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share</Link>
      <Link href="/community">Community</Link>
    </div>
  );
}
