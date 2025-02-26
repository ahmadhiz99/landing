import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Career({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout>
            <div className="flex flex-col gap-4 w-full text-justify">
                {/* Description */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-black">Career</h1>
                    <p>
                        I am a highly independent and pragmatic software developer with experience in various modern frameworks and architectures. I specialize in backend and full-stack development, primarily working with PHP and Laravel for building scalable and maintainable applications. Additionally, I have experience with CodeIgniter, Spring Boot, Golang (Gin, Fiber), and Node.js. On the frontend, I utilize React with Inertia.js to create seamless user experiences.
                    </p>
                    <p>
                        My expertise includes microservices architecture, API development, and WebSocket-based real-time applications. I have hands-on experience in setting up and managing PostgreSQL databases using HeidiSQL, deploying applications with Docker and NGINX, and integrating authentication and authorization mechanisms efficiently.
                    </p>
                    <p>
                        In addition to web development, I have worked on video conferencing technologies, real-time messaging, and gRPC-based communication for high-performance distributed systems. My development philosophy is centered around simplicity and efficiency, ensuring that every solution is optimized for scalability and maintainability.
                    </p>
                </div>
                <hr />
    
                {/* Freelance Experience */}
                <div className="flex flex-col gap-2 mt-12">
                    <h1 className="text-2xl font-black">Freelance Software Developer (Apr 2024 - Jan 2025)</h1>
                    <p>
                        Worked on multiple projects, mainly focusing on PHP and Laravel-based systems:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>
                            <strong>Supply Management System</strong> – Developed an inventory and supply tracking system to streamline logistics and stock monitoring.
                        </li>
                        <li>
                            <strong>Website Recruitment System</strong> – Built a recruitment platform with user authentication, job postings, and applicant tracking features.
                        </li>
                        <li>
                            <strong>Posyandu Monitoring System</strong> – Created a system for monitoring healthcare services, including child growth tracking and vaccination schedules.
                        </li>
                        <li>
                            <strong>Course Scheduling System</strong> – Developed a scheduling system for academic institutions to automate class and faculty timetables.
                        </li>
                        <li>
                            <strong>Contributed to Rumah-Cerita</strong> – Assisted in feature development and maintenance of the Rumah-Cerita platform.
                        </li>
                    </ul>
                    <p>
                        A self-driven learner with a strong foundation in computer science, software engineering, and system architecture. My learning extends beyond formal education, driven by curiosity and a desire to build practical solutions.
                    </p>
                </div>
                <hr />
    
                {/* Peranti Digital Solusindo Experience */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-black">Peranti Digital Solusindo (Mar 2023 - Apr 2024)</h1>
                    <p>
                        As a software developer at Peranti Digital Solusindo, I was responsible for:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Conducting <strong>analysis and adjustment</strong> of client needs to align system requirements with business goals.</li>
                        <li>Developing <strong>custom modules</strong> and system enhancements to improve performance and functionality.</li>
                        <li>Providing <strong>bug fixing and troubleshooting</strong> for client-reported issues related to data processing and system stability.</li>
                        <li>Performing <strong>server monitoring and maintenance</strong> to ensure uptime and security compliance.</li>
                        <li>Creating <strong>UML documentation</strong>, including system flow diagrams, use cases, and database structures.</li>
                    </ul>
                </div>
                <hr />
    
                {/* Universitas Alma Ata Experience */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-black">Universitas Alma Ata Yogyakarta (Aug 2022 - Feb 2023)</h1>
                    <p>
                        As part of the IT team at Universitas Alma Ata Yogyakarta, I focused on:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Maintaining and optimizing existing systems to ensure smooth operation and minimize downtime.</li>
                        <li>Conducting periodic system updates and bug fixes.</li>
                        <li>Assisting in troubleshooting and performance improvements for web-based applications used by the university.</li>
                    </ul>
                </div>
                <hr />
            </div>
        </GuestLayout>
    );
    
}
