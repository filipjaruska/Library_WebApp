'use client';
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

const Signin = () => {
    const { data: session } = useSession();
    console.log({ session });
    return (
        <div className='flex pr-2'>
            {session?.user ? (
                <div className='flex items-center gap-2'>
                    <p className="text-sky-600"> {session.user.username}</p>
                    <button className="text-red-500" onClick={() => signOut()}>
                        Sign Out
                    </button>
                </div>
            ) : (
                <button className="text-green-600" onClick={() => signIn()}>
                    Sign In
                </button>
            )}
        </div>
    )
}

export default Signin