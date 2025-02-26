import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Background({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout >
            <div className='flex flex-col gap-4 w-full text-justify'>
                
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-black'>Description</h1>
                        I am a highly independent and pragmatic software developer with experience in various modern frameworks and architectures. I specialize in backend and full-stack development, working with technologies such as Laravel, CodeIgniter, Spring Boot, Golang (Gin, Fiber), and Node.js. On the frontend, I use React with Inertia.js to create seamless user experiences.
                        My expertise includes microservices architecture, API development, and WebSocket-based real-time applications. I have hands-on experience in setting up and managing PostgreSQL databases using HeidiSQL, deploying applications with Docker and NGINX, and integrating authentication and authorization mechanisms efficiently.
                        In addition to web development, I am exploring video conferencing technologies, real-time messaging, and gRPC-based communication for high-performance distributed systems. My development philosophy is centered around simplicity and efficiency, ensuring that every solution is optimized for scalability and maintainability.
                    </div>
                    <hr />
                
                    <div className='flex flex-col gap-2 mt-12'>
                        <h1 className='text-2xl font-black'>Bachelor's Degree</h1>
                        <h2 className='text-lg font-medium'>Universitas Alma ata Yogyakarta (2018 - 2022)</h2>
                        <p className='pl-4'>
                            A self-driven learner with a strong foundation in computer science, software engineering, and system architecture. My learning extends beyond formal education, driven by curiosity and a desire to build practical solutions.
                        </p>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-black'>High Scool Degree</h1>
                        <h2 className='text-lg font-medium'>SMK N 2 Pengasih (2015 - 2018)</h2>
                        <p className='pl-4'>
                            Developed critical thinking and technical skills while exploring programming, game mechanics, and philosophical ideas that shaped my perspective on society and technology.
                        </p>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-black'>Middle School</h1>
                        <h2 className='text-lg font-medium'>SMP N 4 Wates (2012 - 2015)</h2>
                        <p className='pl-4'>
                            Gained an early interest in technology and programming while also beginning to question societal structures and norms.
                        </p>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-black'>Elementary School</h1>
                        <h2 className='text-lg font-medium'>SD N 2 Janturan (2007 - 2012)</h2>
                        <p className='pl-4'>,
                            Developed a natural curiosity about the world, which later evolved into a deeper philosophical and technological exploration.
                        </p>
                    </div>
            </div>
        </GuestLayout>
    );
}
