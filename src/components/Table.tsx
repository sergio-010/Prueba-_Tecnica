'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

import { Brand } from '@prisma/client';
import { Pencil, Trash } from 'lucide-react';
import { Button } from './ui/button';
import { deleteBrand } from '@/app/actions/brands/delete-brand.action';

// Asegúrate de importar la acción de eliminar


interface Props {
    brands: Brand[];
}

export default function Table({ brands }: Props) {
    const [brandList, setBrandList] = useState<Brand[]>(brands);
    const router = useRouter();

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta marca?');
        if (!confirmDelete) return;

        try {
            // Llama a la acción de eliminar
            const result = await deleteBrand(id);
            if (result.success) {
                // Elimina la marca de la lista local
                setBrandList(prevBrands => prevBrands.filter(brand => brand.id !== id));
                alert('Marca eliminada correctamente.');
            } else {
                alert('Error al eliminar la marca.');
            }
        } catch (error) {
            alert('Error al eliminar la marca: ' + error);
        }
    };

    return (
        <>
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
                        {brandList.map((brand) => (
                            <tr key={brand.id} className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {brand.id}
                                </th>
                                <td className="px-6 py-4">{brand.brandName}</td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{brand.trademarkOwner}</td>
                                <td className="px-6 py-4">{brand.status ? 'Activo' : 'Inactivo'}</td>
                                <td className="flex gap-2 px-6 py-4">
                                    <Link href={`/records/edit/${brand.id}`} className="font-medium text-slate-700 dark:text-blue-500 hover:animate-bounce">
                                        <Pencil size={20} />
                                    </Link>
                                    <button onClick={() => handleDelete(brand.id)} className="font-medium text-red-600 dark:text-red-500 hover:animate-bounce">
                                        <Trash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Button className="mt-4" onClick={() => router.push('/records/create')}>
                Crear Registro
            </Button>
        </>
    );
}
