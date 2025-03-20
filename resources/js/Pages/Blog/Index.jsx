import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

export default function Index({flash,blogs}) {
    const props = usePage().props;
    
     useEffect(() => {
            if (props.flash.response?.status == 200) {
                toast.success(props.flash.response.message);
            }
            if (props.flash.response?.status == 500) {
                toast.error(props.flash.response.message);
            }
            
        }, [flash]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Blogs
                </h2>
            }
        >
            <Head title="Dashboard" />
            <ToastContainer />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='mb-5'>
                        <a href='/blog/create' className='shadow-xl bg-blue-500 p-2 rounded font-bold text-xl text-white hover:bg-blue-600 transition-transform hover:scale-105 hover:shadow-md'> 
                            Tambah Data
                        </a>
                    </div>

                    {
                        blogs?.data.map((blog, idx) => {
                            return (
                                <div className='bg-white shadow-2xl sm:rounded-lg dark:bg-gray-800  hover:bg-slate-100 hover:shadow-xl transition-transform'>
                                    <Link href={route('blog.show', blog.id)}>
                                        <div className="overflow-hidden ">

                                            <div className="p-6 mb-2 text-gray-900 dark:text-gray-100">

                                                <div>
                                                    <div className='flex flex-row gap-2 mb-2'>
                                                        <h1 className="font-bold text-xl">{blog.title}</h1>
                                                        {
                                                            blog?.status == 'draft' ?
                                                            <p className='bg-orange-300 px-2 flex items-center rounded-lg text-white text-sm'>{blog.status}</p>
                                                            :
                                                            <p className='flex bg-green-400 px-2 flex items-center rounded-lg text-white text-sm'>{blog.status}</p>
                                                        }
                                                    </div>
                                                    <div className='flex flex-row justify-between'>
                                                        <p className='text-gray-500'>
                                                            {blog.created_at ? new Date(blog.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A'}
                                                        </p>
                                                        <div className='flex flex-row gap-2'>
                                                            {
                                                            JSON.parse(blog?.label || "[]").map((label, idx) => (
                                                                    <p key={idx} className="bg-blue-300/80 px-2 flex items-center rounded-full text-white">
                                                                        {label}
                                                                    </p>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row gap-2">
                                                    {/* <img
                                                        src="/assets/images/image1.jpeg"
                                                        className="h-auto object-cover"
                                                        width={150}
                                                        height={150}
                                                        alt=""
                                                    /> */}
                                                    <div
                                                        className="row-6 w-full overflow-hidden text-ellipsis"
                                                        style={{
                                                            height: '150px',
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 5,
                                                            WebkitBoxOrient: 'vertical',
                                                        }}
                                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                    <div className='my-2 bg-gray-100 p-2 flex justify-between'>
                                        <p>Actions</p>
                                        
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent default behavior
                                                if (confirm("Are you sure you want to delete this blog?")) {
                                                    router.delete(route('blog.destroy', blog.id));
                                                }
                                            }}
                                            className="bg-red-500 text-white rounded p-1 px-3 hover:bg-red-600 hover:shadow-md hover:scale-105 transition-transform"
                                        >
                                            Delete
                                        </button>
                                    </div>

                                </div>
                            );
                        })
                    }

                    <Pagination data={blogs} />
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
