import { getBrand } from "@/app/actions";

import Form from "../../create/components/Form";

interface Props {
    params: { id: string }
}

export default async function EditBransPage({ params }: Props) {
    const { id } = params

    const { brand, error } = await getBrand(Number(id))

    if (!brand || error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }

    return (
        <div>
            <Form
                isEditing
                brandData={brand}
            />
        </div>
    );
}