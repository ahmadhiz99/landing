import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, router, usePage } from "@inertiajs/react"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Index({subcategory}){

    const props = usePage().props;
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState('active');
    const [mode, setMode] = useState('add');

    const handleEdit = (e, item) => {
        e.preventDefault();
        setId(item.id);
        setName(item.name);
        setDetail(item.detail);
        setStatus(item.status);
        setMode('edit');
    }

    const handleDelete = (e, item) => {
        e.preventDefault();
        router.delete(route('subcategory.destroy', item.id), {
            onSuccess: (page) => { 
                if (page.props.flash?.message) {
                    toast.success(page.props.flash.message);
                } else {
                    toast.error("An unexpected error occurred.");
                }
            },
            onError: (errors) => {
                toast.error("Failed to delete the subcategory. Please check your input.");
                console.error(errors);
            }
        })
    }

    const handleSave = (e) => {
        e.preventDefault();

        if (name == '') {
            toast.error("Nama tidak boleh kosong");
            return;
        }
        
        
        if (mode == 'edit'){
            router.put(route('subcategory.update', id),{
                name:name,
                detail:detail,
                status:status
            },{
                onSuccess: (page) => {
                    if (page.props.flash?.success) {
                        toast.success(page.props.flash.success);
                    } else {
                        toast.error("An unexpected error occurred.");
                    }
                },
                onError: (errors) => {
                    toast.error("Failed to save the subcategory. Please check your input.");
                    console.error(errors);
                }
            })
        }else{
            router.post(route('subcategory.store'), {
                name: name,
                detail: detail,
                status: status
            }, {
                onSuccess: (page) => {
                    if (page.props.flash?.success) {
                        toast.success(page.props.flash.success);

                        setId('');
                        setName('');
                        setDetail('');
                        setStatus('active');
                    } else {
                        toast.error("An unexpected error occurred.");
                    }
                },
                onError: (errors) => {
                    toast.error("Failed to save the subcategory. Please check your input.");
                    console.error(errors);
                }
            });  
        }
       
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Subcategory
                </h2>
            }
        >

            <Head title="Subcategory" />

            <ToastContainer />
            
            <div className="py-12">
                <div className="">
                    <div className="flex p-2">
                        <div className="w-4/5 overflow-x-auto p-1 shadow-sm rounded-md w-full">
                            <table className="min-w-full text-left text-sm font-light bg-white border shadow-md">  
                                <thead className="border-b border-neutral-300 font-medium bg-slate-100/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">#</th>
                                        <th scope="col" className="px-6 py-3">Nama</th>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                        <th scope="col" className="px-6 py-3">Detail</th>
                                        <th scope="col" className="px-6 py-3">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        subcategory?.data?.map((item, index) => (
                                            <tr className="border-neutral-200 bg-white botder-t">
                                                <td scope="col" className="whitespace-nowrap px-6 py-3">{index+1}</td>
                                                <td scope="col" className="whitespace-nowrap px-6 py-3">{item.name}</td>
                                                <td scope="col" className="whitespace-nowrap px-6 py-3">{item.status}</td>
                                                <td scope="col" className="whitespace-nowrap px-6 py-3">{item.detail}</td>
                                                <td scope="col" className="whitespace-nowrap py-3 flex gap-2">
                                                    <Link onClick={(e)=> handleEdit(e, item)} className="text-blue-500">Edit</Link>
                                                    <Link onClick={(e) => handleDelete(e, item)} className="text-red-500">Delete</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <Pagination data={subcategory} />
                        </div>

                        <div className="w-1/5 bg-white py-6 mx-2 shadow-sm rounded-md mx-auto">
                            <div className="flex justify-between items-center px-6 gap-4">
                                <form className="w-full">
                                    <div>
                                        {
                                            mode == 'edit' ? 
                                                <div>
                                                    <h2 className="font-bold text-lg" >
                                                        Edit Kategori 
                                                        <button className="btn bg-green-500 text-white font-thin rounded-sm px-2 py-1 text-sm mx-2" onClick={(e) => {setId(''); setMode('add'); setName(''); setDetail(''); setStatus('active')}}>  
                                                            Reset
                                                        </button>
                                                    </h2>
                                                    <span className="font-thin ">"{name}" </span>
                                                </div> 
                                            : 
                                                <div><h2 className="font-bold text-lg" >Tambah Subkategori</h2></div>
                                        }
                                        
                                    </div>
                                    <div>
                                        <label htmlFor="name">Nama</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} name="name" className="rounded-md lg:w-full py-3 border border-slate-300" type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="detail">Detail</label>
                                        <input value={detail} onChange={(e) => setDetail(e.target.value)} name="detail" className="rounded-md lg:w-full py-3 border border-slate-300" type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="status">Status</label>
                                        <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" id="" className=" w-full rounded-md lg-w-full py-3 border border-slate-300">
                                            <option value="active">Aktif</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                        {/* <input className="rounded-md lg:w-full py-3 border border-slate-300" type="text" /> */}
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <button onClick={(e) => handleSave(e)} className="w-full bg-blue-500 rounded p-2 text-white">Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}