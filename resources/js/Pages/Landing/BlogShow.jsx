import React, { useState, useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function BlogShow({blog}) {
    const [blogs, setBlogs] = useState([]); // State untuk menyimpan data blog
    const [loading, setLoading] = useState(true); // State untuk menampilkan loading

    const default_category = blog ? blog.category : '-';
    const default_subcategory = blog ? blog.subcategory : '-';
    const default_title = blog ? blog.title : '-';
    const default_content = blog ? blog.content : '-';
    const default_label = blog ? JSON.parse(blog.label) : '-';
    const default_id = blog ? blog.id : '-';

    const [category, setCategory] = useState(default_category);
    const [subcategory, setSubcategory] = useState(default_subcategory);
    const [title, setTitle] = useState(default_title);
    const [content, setContent] = useState(default_content);
    const [id, setId] = useState(default_id);
    
    const [tags, setTags] = useState(default_label); // Menyimpan daftar tag
    const [label, setLabel] = useState(''); // Menyimpan input sementara


    return (
        <GuestLayout>
            <Head title="Blogs" />
            <div className="flex flex-col gap-4 w-full text-justify">
                <div className="mt-12 gap-4 grid lg:grid-cols-1 xl:grid-cols-2">

                    {blog && (
                        <div>
                            <div className='flex flex-row justify-between'>
                                <p className='text-gray-500'>
                                    {blog.created_at ? new Date(blog.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A'}
                                </p>
                                <div className='flex flex-row gap-2'>
                                    {blog?.label &&
                                    JSON.parse(blog?.label || "[]").map((label, idx) => (
                                            <p key={idx} className="bg-blue-300/80 px-2 flex items-center rounded-full text-white">
                                                {label}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>

                                <h1 className="text-4xl mt-6 font-black">{blog.title}</h1>
                                <hr className="my-4" />
                                <div
                                    className="row-6 w-full overflow-hidden text-ellipsis"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                        </div>
                    )}

                </div>
            </div>
        </GuestLayout>
    );
}