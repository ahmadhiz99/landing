import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout >
            <Head title='Personal Website' />
            <div className='flex flex-col gap-2 w-full'>
                {/* <header className='w-full'>
                    <nav className='bg-gray-200 flex gap-16 w-full justify-center text-gray-600 py-3 fixed'>
                        <Link href="#home" className='font-bold font-sans text-xl p-2'>
                            Home
                        </Link>
                        <Link href="#project" className='font-thin font-sans text-xl p-2'>
                            Projects
                        </Link>
                        <Link href="#blog" className='font-thin font-sans text-xl p-2'>
                            Blog
                        </Link>
                        <Link href="#learn" className='font-thin font-sans text-xl p-2'>
                            Learn
                        </Link>
                        <Link href="#about" className='font-thin font-sans text-xl p-2'>
                            About
                        </Link>
                    </nav>
                </header> */}
                <main className=''>
                    <section id="home">
                        <div className='h-200'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis tempora atque hic dolorem omnis repudiandae temporibus laboriosam in, nobis cumque voluptatum commodi ut doloribus quia? Reiciendis, perferendis? Deserunt, id.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis tempora atque hic dolorem omnis repudiandae temporibus laboriosam in, nobis cumque voluptatum commodi ut doloribus quia? Reiciendis, perferendis? Deserunt, id.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis tempora atque hic dolorem omnis repudiandae temporibus laboriosam in, nobis cumque voluptatum commodi ut doloribus quia? Reiciendis, perferendis? Deserunt, id.
                        </div>
                    </section>
                </main>
            </div>
        </GuestLayout>
    );
}
