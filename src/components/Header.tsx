"use client";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  const { authStatus } = useAuth();
  return (
    <nav className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-orange-400 to-[#007bc3] rounded-md filter blur-3xl opacity-50 -z-50" />
      <Link href={"/"} className="inline-block w-full max-w-[150px]">
        <Logo />
      </Link>
      <div className="flex items-center space-x-5 flex-1 justify-center w-full md:justify-end">
        {authStatus ? (
          <Link
            href="/board"
            className="rounded-md border bg-primary text-white px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Board
          </Link>
        ) : (
          <></>
        )}
        {authStatus ? (
          <Link
            href="/profile"
            className="rounded-md border bg-primary text-white px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            My account
          </Link>
        ) : (
          <></>
        )}
        {authStatus ? (
          <Link
            href={authStatus ? "/logout" : "/login"}
            className="rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {authStatus ? "Logout" : "Log In"}
          </Link>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
