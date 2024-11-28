import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Table() {
    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-1 bg-gray-50 dark:bg-gray-800">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Marca
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Titular
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            1
                        </th>
                        <td className="px-6 py-4">
                            Perrito
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            Aceptado
                        </td>
                        <td className="flex gap-2 px-6 py-4 ">
                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Pencil size={20} /></Link>
                            <Link href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline"><Trash size={20} /></Link>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div >

    )
}
