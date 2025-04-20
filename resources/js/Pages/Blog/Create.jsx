import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import { data } from "autoprefixer";
import Select from "react-select";

export default function Create({ auth, flash, data_category, data_subcategory, blog }) {
    const props = usePage().props;
    const default_category = blog ? blog.category : props.flash.response?.data?.category ?? '';
    const default_subcategory = blog ? blog.subcategory : props.flash.response?.data.subcategory ?? '';
    const default_title = blog ? blog.title : props.flash.response?.data.title ?? '';
    const default_content = blog ? blog.content : props.flash.response?.data.content ?? '';
    const default_label = blog ? blog.label : props.flash.response?.data.label ?? '[]';
    const default_id = blog ? blog.id : props.flash.response?.data.id ?? '';
    const parse_label = default_label ? JSON.parse(default_label || "[]") : [];

    const [category, setCategory] = useState(default_category ? default_category : '');
    const [subcategory, setSubcategory] = useState(default_subcategory ? default_subcategory : '');
    const [title, setTitle] = useState(default_title ? default_title : '');
    const [content, setContent] = useState(default_content ? default_content : '');
    const [id, setId] = useState(default_id ? default_id : '');
    
    const [tags, setTags] = useState(parse_label); // Menyimpan daftar tag
    const [label, setLabel] = useState(''); // Menyimpan input sementara

    // Format data_category untuk react-select
    const categoryOptions = data_category?.map((item) => ({
        value: item.id,
        label: item.name,
    }));

    const subcategoryOptions = data_subcategory?.map((item) => ({
        value: item.id,
        label: item.name,
    }));

    useEffect(() => {
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
                label: tags,
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
                label: tags,
                status: 'publish',
                id:id
            },
            // preserveState: true,
        })
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && label.trim() !== "") {
            setTags([...tags, label.trim()]); // Tambahkan label ke daftar tags
            setLabel(""); // Reset input
            e.preventDefault(); // Hindari form submit
        }
    };

    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index)); // Hapus tag yang diklik
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Create Blogs
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ToastContainer />

            <div className="py-4 ">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className=" flex flex-col gap-4 bg-white p-6 shadow rounded-lg">
                        
                        <div className="flex flex-row gap-16 justify-between">
                            <div className="flex flex-row gap-4">

                                <div>
                                    <InputLabel htmlFor="category" value="Category" />
                                    <Select
                                        options={categoryOptions}
                                        value={categoryOptions.find((option) => option.value === category)}
                                        onChange={(selectedOption) => setCategory(selectedOption?.value || '')}
                                        placeholder="--Choose--"
                                        className="basic-single"
                                        classNamePrefix="select"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="subcategory" value="Subcategory" />
                                    <Select
                                        options={subcategoryOptions}
                                        value={subcategoryOptions.find((option) => option.value === subcategory)}
                                        onChange={(selectedOption) => setSubcategory(selectedOption?.value || '')}
                                        placeholder="--Choose--"
                                        className="basic-single"
                                        classNamePrefix="select"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="label" value="Tags / Label" />                                    
                                    {/* Input untuk mengetik label */}
                                    <TextInput
                                        id="label"
                                        value={label}
                                        onChange={(e) => setLabel(e.target.value)}
                                        onKeyDown={handleKeyDown} // Tambah label saat tekan Enter
                                        className=""
                                        placeholder="Ketik label lalu tekan Enter..."
                                    />
                                    {/* Menampilkan daftar tag */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-500 text-white rounded-full cursor-pointer"
                                                onClick={() => removeTag(index)}
                                            >
                                                {tag} ✖
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-wrap gap-4 mt-4 items-start">
                                <button 
                                    className="px-4 py-2 bg-yellow-500 text-white rounded w-fit"
                                    onClick={(e) => saveDraft(e)}
                                >
                                    Save as Draft
                                </button>
                                <button 
                                    className="px-4 py-2 bg-green-500 text-white rounded w-fit"
                                    onClick={(e) => savePublish(e)}
                                >
                                    Publish
                                </button>
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
