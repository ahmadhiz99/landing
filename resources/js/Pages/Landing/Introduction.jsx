import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import {TypeAnimation} from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Introduction({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout >
            <div className='flex flex-col gap-2 w-full bg-yellow-200'>
                {/* <h1 className=' text-4xl text-slate-500 font-sans'>Introduction</h1> */}
                
                <main className=''>
                    <div className='flex gap-2 items-center'>
                        <img src="/assets/images/photo.png" width={400} alt="" />
                        <div className='flex flex-col h-200 mx-12 gap-2'>
                            <h1 className='text-6xl font-thin'>Hi. I am a</h1>
                            <TypeAnimation
                                sequence={[
                                    'PHP', 
                                    2000,
                                    'Laravel', 
                                    2000, 
                                    'React', 
                                    2000,
                                    'Golang', 
                                    2000,
                                    'Mobile', 
                                    2000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                className='ml-2 bg-blue-500 text-white border-l-4 pl-2 border-yellow-500 shadow-md'
                                />
                            <h1 className='text-8xl font-bold text-yellow-500'>Developer</h1>
                            {/* <hr /> */}
                           
                            <h1 className='mt-2 text-xl font-bold border-yellow-400 text-yellow-500 ml-2 border-b-2'>ahmad hizbullah akbar</h1>

                            <div className='flex flex-row ml-2'>
                                <a href="https://www.instagram.com/ahmadhiz00">
                                    <FaInstagram size={25} className='text-gray-500' style={{ marginRight: '10px', cursor: 'pointer' }} />
                                </a>
                                <a href="https://www.linkedin.com/in/ahmad-hizbullah-akbar-298811245/">
                                    <FaLinkedin size={25} className='text-gray-500' style={{ marginRight: '10px', cursor: 'pointer' }} />
                                </a>
                                <a href="https://github.com/ahmadhiz99/">
                                    <FaGithub  size={25} className='text-gray-500' style={{ marginRight: '10px', cursor: 'pointer' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </GuestLayout>
    );
}
