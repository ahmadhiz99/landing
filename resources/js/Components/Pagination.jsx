import { router } from "@inertiajs/react";
import React from "react";

export default function Pagination({ data }) {
    const nextPage = (e) => {
        e.preventDefault();
        router.visit(`${data.next_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };
    const prevPage = (e) => {
        e.preventDefault();
        router.visit(`${data.prev_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };
    const firstPage = (e) => {
        e.preventDefault();
        router.visit(`${data.first_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };
    const lastPage = (e) => {
        e.preventDefault();
        router.visit(`${data.last_page_url}`, {
            method: "get",
            preserveState: true,
            preserveScroll: true,
        });
    };
    return (
        <div className="flex flex-row justify-between items-center bg-white shadow px-6 py-5 rounded-lg">
            <p className="text-xs text-semibold text-neutral-500">
                Total data : {data.total}
            </p>
            <div className="flex flex-row justify-end items-center gap-2">
                <p className="text-xs mr-5 text-neutral-500">
                    Halaman {data.current_page} dari {data.last_page}
                </p>
                {data.current_page > 1 && (
                    <button
                        className="bg-slate-100 rounded p-1 text-slate-600"
                        onClick={(e) => firstPage(e)}
                    >
                        First
                    </button>
                )}
                {data.current_page > 1 && (
                    <button
                        className="bg-slate-100 rounded p-1 text-slate-600"
                        onClick={(e) => prevPage(e)}
                    >
                        Prev
                    </button>
                )}

                {data.current_page < data.last_page && (
                    <button
                        className="bg-slate-100 rounded p-1 text-slate-600"
                        onClick={(e) => nextPage(e)}
                    >
                        Next
                    </button>
                )}

                {data.current_page < data.last_page && (
                    <button
                        className="bg-slate-100 rounded p-1 text-slate-600"
                        onClick={(e) => lastPage(e)}
                    >
                        Last
                    </button>
                )}
            </div>
        </div>
    );
}
