import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Blog({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout>
            <div className='flex flex-col gap-4 w-full text-justify'>
                
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-black'>My Blog</h1>
                    As a freelance developer, I have worked on various projects involving PHP and Laravel-based systems. My expertise lies in full-cycle development, system architecture, API integrations, database management, and deployment. I focus on building scalable and efficient web applications with strong security practices.
                </div>

                <div className='mt-12 gap-4 grid lg:grid-cols-1 xl:grid-cols-2'>
                    {/* Course Scheduling System */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Course Scheduling System</h1>
                        <p>
                            Developed an automated scheduling platform for academic institutions, optimizing class and faculty timetables with real-time adjustments and notifications.
                        </p>
                    </a>

                    {/* Supply Management System */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Supply Management System</h1>
                        <p>
                            Built an inventory tracking system to manage stock levels, automate low-stock alerts, and streamline supply chain operations.
                        </p>
                    </a>

                    {/* Website Recruitment System */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Website Recruitment System</h1>
                        <p>
                            Developed a recruitment platform with job postings, applicant tracking, and automated hiring workflows for better recruitment management.
                        </p>
                    </a>

                    {/* Rumah-Cerita Contribution */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Contributed to Rumah-Cerita</h1>
                        <p>
                            Assisted in feature development and system enhancements to improve user experience and platform performance.
                        </p>
                    </a>

                    {/*  */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Course Scheduling System</h1>
                        <p>
                            Developed an automated scheduling platform for academic institutions, optimizing class and faculty timetables with real-time adjustments and notifications.
                        </p>
                    </a>

                    {/* Supply Management System */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Supply Management System</h1>
                        <p>
                            Built an inventory tracking system to manage stock levels, automate low-stock alerts, and streamline supply chain operations.
                        </p>
                    </a>

                    {/* Website Recruitment System */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Website Recruitment System</h1>
                        <p>
                            Developed a recruitment platform with job postings, applicant tracking, and automated hiring workflows for better recruitment management.
                        </p>
                    </a>

                    {/* Rumah-Cerita Contribution */}
                    <a href='#' className='flex flex-col gap-2 border border-2 p-6 shadow-md'>
                        <h1 className='text-2xl font-black'>Contributed to Rumah-Cerita</h1>
                        <p>
                            Assisted in feature development and system enhancements to improve user experience and platform performance.
                        </p>
                    </a>
                </div>

            </div>
        </GuestLayout>
    );
}
