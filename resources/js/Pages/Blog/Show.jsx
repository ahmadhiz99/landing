import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";

export default function Show({auth,flash, blog}) {
    const props = usePage().props;
    console.log(blog);
    
    const [content, setContent] = useState(blog?.content);
    const [title, setTitle] = useState(blog?.title);
    const [category, setCategory] = useState(blog?.category);
    const [subcategory, setSubcategory] = useState(blog?.subcategory);
    const [label, setLabel] = useState(blog?.label);
    const [id, setId] = useState(blog?.id);
    const [status, setStatus] = useState(blog?.status);
    

    useEffect(() => {
        console.log(props.flash);
        
        if (props.flash.response?.status == 200) {
            toast.success(props.flash.response.message);
        }
        if (props.flash.response?.status == 500) {
            toast.error(props.flash.response.message);
        }
        
    }, [flash]);


    const saveDraft = (e) => {
        e.preventDefault();
        router.visit(route("blog.store.draft"),{
            method: "post",
            forceFormData: true,
            data:{
                title : title,
                content: content,
                category: category,
                subcategory: subcategory,
                label: label,
                status: 'draft',
                id:id
            },
            // preserveState: true,
        })
    }

    const savePublish = (e) => {
        e.preventDefault();
        router.visit(route("blog.store.publish"),{
            method: "post",
            forceFormData: true,
            data:{
                title : title,
                content: content,
                category: category,
                subcategory: subcategory,
                label: label,
                status: 'publish',
                id:id
            },
            // preserveState: true,
        })
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex gap-2">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Create Blogs 
                    </h2>
                    {
                        status == 'publish' ? 
                        <h4 className="text-white bg-green-400 p-1 px-3 rounded-lg text-sm font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            {status}
                        </h4>
                        :
                        <h4 className="text-white bg-gray-400 p-1 px-3 rounded-lg text-sm font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            {status}
                        </h4>
                    }
                </div>
            }
        >
            <Head title="Dashboard" />

            <ToastContainer />

            <div className="py-">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className=" flex flex-col gap-4 bg-white p-6 shadow rounded-lg">
                        
                        <div className="flex flex-row gap-16 justify-between">
                            <div className="flex flex-row gap-4">

                                <div>
                                    <InputLabel
                                        htmlFor="category"
                                        value="Category"
                                        />
                                    <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)} id="" className="border-gray-400 rounded">
                                        <option value="">--Choose--</option>
                                        <option value="1">Bahasa Pemrograman</option>
                                        <option value="2">Database</option>
                                    </select>
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="subcategory"
                                        value="Subcategory"
                                    />
                                    <select name="subcategory" value={subcategory} onChange={(e)=> setSubcategory(e.target.value)} id="" className="border-gray-400 rounded">
                                        <option value="">--Choose--</option>
                                        <option value="1">Golang</option>
                                        <option value="2">Laravel</option>
                                    </select>
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="label"
                                        value="Tags / label"
                                    />
                                    <TextInput
                                        id="label"
                                        value={label}
                                        onChange={(e)=> setLabel(e.target.value)}
                                        className="w-full"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-row gap-4">
                                <button 
                                    className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
                                    onClick={(e) => saveDraft(e)}
                                >
                                    Save as Draft
                                </button>
                                <button 
                                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                                    onClick={(e) => savePublish(e)}
                                >
                                Publish
                                </button>
                                {/* <button 
                                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                                    onClick={() => test()}
                                >
                                Test
                                </button> */}
                            </div>
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="title"
                                value="Title"
                            />
                            <TextInput
                                id="title"
                                value={title}
                                onChange={(e)=> setTitle(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="content"
                                value="Content"
                            />
                            <ReactQuill 
                                id="content"
                                value={content} 
                                onChange={setContent} 
                                theme="snow" 
                                className="h-[700px] mb-16"
                            />
                        </div>

                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
