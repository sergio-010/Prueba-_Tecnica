'use client'
import Table from "@/components/Table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PageRecords() {
    const router = useRouter();

    return (
        <div>
            <Table />
            <Button className="mt-4" onClick={() => router.push('/records/create')}>
                Crear Registro
            </Button>
        </div>
    );
}
