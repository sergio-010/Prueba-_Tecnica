import { getBrands } from "../actions";

import Table from "@/components/Table";

export default async function PageRecords() {
    const { brands } = await getBrands({ take: 6, skip: 0 });

    return (
        <>
            <Table brands={brands} />
        </>
    );
}
