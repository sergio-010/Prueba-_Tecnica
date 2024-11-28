import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,

    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const BreadcrumbForm = () => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Paso 1</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Paso 2</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Paso 3</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>


    )
}

