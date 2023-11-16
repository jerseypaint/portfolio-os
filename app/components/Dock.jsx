'use client'

import Link from "next/link"
import { useContext, useEffect, useState, useRef } from "react"
import { DockContext } from "./DockContext"
import { Trash } from "./Icons"
import { usePathname } from "next/navigation"

export const Dock = ({}) => {
    const [showDock, setShowDock]       = useState(true)
    const dock                          = useContext(DockContext);
    const pathname                      = usePathname()

    function openWindow(index) {
        const path = dock.items[index].path
        dock.items.splice(index, 1)
        dock.setItems(dock.items)
        router.push(`/${path}`)
        router.refresh()
    }

    function closeWindow(path) {
        const newItems = dock.items.filter(function(el) { return el.path != path; })
        dock.setItems(newItems)
    }
    return(
        <div className={`w-full`}>
            <div className={`container !max-w-none`}>
                <ul className={`text-white flex items-start gap-6 border-t border-sky-400 py-3 w-full overflow-x-scroll`}>
                    {dock.items.map((item, index) => {
                        const active = pathname.includes(item.path);
                        return(
                            <li key={`dockItem-${index}-${item.path}`} className={`relative py-2 px-4 text-center rounded border ${active ? `bg-sky-300 border-sky-300` : `border-white`}`}>
                                <Link className={`relative flex justify-center ${active ? `!text-slate-900` : `!text-sky-300 hover:!text-white whitespace-pre` } !no-underline uppercase`} href={item.path}>
                                    {item.title}
                                </Link>
                                <div className={`absolute -top-2 -right-2 h-full`}>
                                    <button className={`bg-gray-950 flex items-center justify-center w-5 h-5 p-1 text-white rounded-full border border-white`} onClick={() => closeWindow(item.path)}>
                                        <Trash />
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}