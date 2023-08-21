"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";
import Link from "next/link";

const Home = () => {
  const { authStatus } = useAuth();
  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap -mx-2 mt-10 md:mt-32 gap-y-8">
        <div className="w-full sm:w-1/2 px-2 flex justify-center flex-wrap items-center">
          <div className="relative text-center w-full flex justify-center flex-wrap">
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-4">Trello Clone Test</h1>
              <p className="text-black/60">
                Developed by{" "}
                <Link
                  href="https://github.com/Gupie21"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                  Arturo Miranda
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify-end">
          {authStatus ? (
            <div className="max-w-md">
              <ProfileCard />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
