"use client";
import Image from "next/image";
import Header from "../components/CookieStandHeader";
import Footer from "../components/CookieStandFooter";
import Login from "../components/CookieStandSignin";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="bg-white p-6 rounded shadow mt-6">
          <Login />
        </div>
      </main>
      <Footer />
    </div>
  );
}
