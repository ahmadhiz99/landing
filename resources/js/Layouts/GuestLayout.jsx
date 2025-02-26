import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900 bg-white-500">
            <div>
                <Head title="Personal Website" />
                <Link href="/">
                    {/* <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" /> */}
                </Link>
            </div>

            {/* Container utama untuk menu dan konten */}
            <div className="w-full flex min-h-screen dark:bg-gray-800">
                {/* Menu di sebelah kiri (sticky agar tetap di tempat) */}
                <div className="w-64 flex flex-col justify-center items-center gap-2 p-6 border-r-2 dark:bg-gray-800 sticky top-0 h-screen">
                    <div className="flex flex-col justify-center items-center h-full w-full gap-4">
                        <Link
                            className={`${route().current('intro') ? 'bg-gray-500 text-white font-bold' : 'text-slate-500 transition hover:bg-blue-100/10'} h-14 flex items-center gap-2 px-5 w-full text-center`}
                            href={route('intro')}
                        >
                            <h1>Introduction</h1>
                        </Link>
                        <Link
                            className={`${route().current('background') ? 'bg-gray-500 text-white font-bold' : 'text-slate-500 transition hover:bg-blue-100/10'} h-14 flex items-center gap-2 px-5 w-full text-center`}
                            href={route('background')}
                        >
                            <h1>Background</h1>
                        </Link>
                        <Link
                            className={`${route().current('career') ? 'bg-gray-500 text-white font-bold' : 'text-slate-500 transition hover:bg-blue-100/10'} h-14 flex items-center gap-2 px-5 w-full text-center`}
                            href={route('career')}
                        >
                            <h1>Career</h1>
                        </Link>
                        <Link
                            className={`${route().current('projects') ? 'bg-gray-500 text-white font-bold' : 'text-slate-500 transition hover:bg-blue-100/10'} h-14 flex items-center gap-2 px-5 w-full text-center`}
                            href={route('projects')}
                        >
                            <h1>Projects</h1>
                        </Link>
                        <Link
                            className={`${route().current('blogs') ? 'bg-gray-500 text-white font-bold' : 'text-slate-500 transition hover:bg-blue-100/10'} h-14 flex items-center gap-2 px-5 w-full text-center`}
                            href={route('blogs')}
                        >
                            <h1>Blogs</h1>
                        </Link>
                    </div>
                </div>

                {/* Konten utama (scrollable) */}
                <div className="flex-1 px-6 py-4 overflow-y-auto m-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
