'use client'
import { Separator } from "@/components/ui/separator"
import { ContextUI } from "@/context/ui/ContextUI"
import { Menu, NotebookPenIcon } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"



function SideBar() {
    const { toggleSidebar, handleToggleSidebar } = useContext(ContextUI)
    return (
        <div
            className={`
                absolute top-0 w-full h-full max-w-72 p-4 text-white bg-slate-700 transition-all ease-in-out duration-300  z-50
                lg:static ${toggleSidebar ? 'left-0' : '-left-72 lg:max-w-20'}
            `}
        >
            <div className={`flex items-center ${toggleSidebar ? 'justify-between' : 'justify-center'}`}>
                <h4
                    className={`
                        text-3xl  font-bold transition-all ease-in-out duration-300 
                        ${toggleSidebar ? '' : 'overflow-hidden w-0 '}
                    `}
                >
                    DashBoard
                </h4>
                <Menu className="hidden lg:block cursor-pointer " size={26} onClick={() => handleToggleSidebar()} />
            </div>
            <ul className="mt-8">
                <li className="justify-center">
                    <Link
                        href={'/records'}
                        className={`flex items-center font-semibold text-lg 
                            ${toggleSidebar ? 'gap-4 ' : 'justify-center'}
                            `}
                    >
                        <NotebookPenIcon size={26} />
                        <span
                            className={`
                                text-xl font-bold transition-all ease-in-out duration-300 
                                ${toggleSidebar ? '' : 'overflow-hidden w-0 '}
                           `}
                        >
                            Registro de Marca
                        </span>
                    </Link>
                </li>
                <Separator className="my-4" />
            </ul>
        </div>
    )
}

export default SideBar