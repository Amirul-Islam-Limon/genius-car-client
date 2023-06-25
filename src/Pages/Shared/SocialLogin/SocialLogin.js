import React from 'react';
// import { IconName } from "react-icons/fa6";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SocialLogin = ({handleSignInWithGoogle,handleSignInWithGitHub}) => {
    return (
        <div className='flex justify-center'>
            <div onClick={handleSignInWithGoogle} className='p-2 m-2 text-xl text-red-600 hover:cursor-pointer bg-slate-200 rounded-xl'><FaGoogle/></div>
            <div onClick={handleSignInWithGitHub} className='p-2 m-2 text-xl text-sky-900 hover:cursor-pointer bg-slate-200 rounded-xl'><FaGithub/></div>
        </div>
    );
};

export default SocialLogin;