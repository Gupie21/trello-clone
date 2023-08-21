import ProfileCard from "@/components/ProfileCard";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
    return (
        <div className="w-full max-w-xl mx-auto py-8 flex flex-wrap gap-y-6">
            <h1 className=" w-full flex items-center gap-x-4">
                <span className="text-3xl font-bold">My Account</span>
            </h1>
            <ProfileCard />
        </div>
    );
}

export default ProfilePage;