import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Project({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout >
            <div className='flex flex-col gap-4 w-full text-justify'>
                
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-black'>Projects</h1>
                        As a freelance developer, I have worked on multiple projects, primarily focusing on PHP and Laravel-based systems. My responsibilities included full-cycle development, system architecture design, API integration, database management, and deployment. I specialize in building scalable web applications, optimizing system performance, and implementing secure authentication mechanisms.
                    </div>
                    <hr />

                    <div className='mt-12 gap-4 grid  lg:grid-cols-1 xl:grid-cols-2 '>
                        <a href='https://rumah-cerita.com/' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                            <h1 className='text-2xl font-black'>Contributed to Rumah-Cerita</h1>
                            <p className=''>
                             Assisted in feature development and maintenance for the Rumah-Cerita platform, improving user experience and system efficiency.
                            </p>
                        </a>
                        <a href='https://ejadwal.akb11.my.id/' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                            <h1 className='text-2xl font-black'>Course Scheduling System</h1>
                            <p className=''>
                            Developed an automated scheduling platform for academic institutions, ensuring optimized class and faculty timetables with real-time adjustments.
                            </p>
                        </a>
                        <a href='https://scm.akb11.my.id/' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                            <h1 className='text-2xl font-black'>Supply Management System</h1>
                            <p className=''>
                            Developed an inventory and supply tracking system to streamline logistics and stock monitoring. The system supports real-time inventory updates, automated low-stock alerts, and role-based access control.
                            </p>
                        </a>
                        <a href='https://recruitment.akb11.my.id/' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                            <h1 className='text-2xl font-black'>Website Recruitment System</h1>
                            <p className=''>
                            Built a recruitment platform that allows companies to manage job postings, track applicants, and automate hiring workflows. Key features include resume uploads, authentication, and automated email notifications.
                            </p>
                        </a>
                        <a href='https://babycare.akb11.my.id/' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                            <h1 className='text-2xl font-black'>Posyandu Monitoring System</h1>
                            <p className=''>
                            Designed a health monitoring system for community healthcare services, focusing on child growth tracking, vaccination schedules, and patient data management.
                            </p>
                        </a>
                       
                    </div>

            </div>
        </GuestLayout>
    );
}
