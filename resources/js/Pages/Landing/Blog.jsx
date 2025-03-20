import React, { useState, useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function Blog() {
    const [blogs, setBlogs] = useState([]); // State untuk menyimpan data blog
    const [loading, setLoading] = useState(true); // State untuk menampilkan loading

    // Fungsi untuk mengambil data blog
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(route('blog.data')); // Menggunakan route helper untuk endpoint API
            setBlogs(response.data); // Simpan data ke state
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false); // Sembunyikan loading setelah data diambil
        }
    };

    // Panggil fetchBlogs saat komponen dirender
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <GuestLayout>
            <Head title="Blogs" />
            <div className="flex flex-col gap-4 w-full text-justify">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-black">My Blog</h1>
                    <p>
                        As a freelance developer, I have worked on various projects involving PHP and Laravel-based systems. My expertise lies in full-cycle development, system architecture, API integrations, database management, and deployment.
                    </p>
                </div>

                <div className="mt-12 gap-4 grid lg:grid-cols-1 xl:grid-cols-2">
                    {loading ? (
                        <p>Loading...</p> // Tampilkan loading jika data belum diambil
                    ) : (
                        blogs?.data.map((blog, idx) => (
                            <a
                                key={idx}
                                href={route('blog.show.public', blog.id)} // Tambahkan route helper untuk link detail blog
                                className="flex flex-col gap-2 border border-2 p-6 shadow-2xl rounded-lg hover:shadow-xl transition-transform"
                            >
                                <h1 className="text-2xl font-black">{blog.title}</h1>
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
                            </a>
                        ))
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}