"use client";
import appwriteService from "@/appwrite/config";
import { Models } from "appwrite";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";


const ProfileCard= () => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

    useEffect(() => {
        (async () => {
            const userData = await appwriteService.getCurrentUser()
            if (userData) {
                setUser(userData)
            }
        })()
    }, [])

    return (
        user && (
            <>
                <div className="flex gap-y-6 flex-wrap px-8 pt-8 rounded-2xl shadow-sm bg-white/50">
                    <div className="flex w-full gap-x-4 items-center">
                        <div className="shrink-0 w-20">
                            <Avatar name={user.name} round size="50" color="#007bc3" />
                        </div>
                        <div className="relative">
                            <p className="font-bold text-xl w-full mb-1">{user.name}</p>
                        </div>
                    </div>
                    <div className="px-8 py-8 w-full flex gap-y-4 flex-wrap">
                        <div className="relative w-full">
                            <p className="text-sm text-gray-700">Display Name</p>
                            <p className="font-semibold">{user.name}</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-700">Email Id</p>
                            <p className="font-semibold">{user.email}</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-700">Phone Number</p>
                            <p className="font-semibold">{user.phone}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}

export default ProfileCard;