'use client'

import React from "react";
import Board from '@/components/Board'
import SearchForm from "@/components/SearchForm";

const ProfilePage = () => {
    return (
        <div className="w-full mx-auto py-8 flex flex-wrap gap-y-6 items-center justify-center">
            <h1 className=" w-full flex items-center gap-x-4">
                <span className="text-3xl font-bold mx-auto">Company Board</span>
                
            </h1>
            <SearchForm/>
            <div className="w-full mx-auto">
                <Board/>
            </div>
        </div>
    );
}

export default ProfilePage;