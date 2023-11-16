'use client'

import { useState, useRef, useEffect, useContext } from "react"
import { Dock } from "./Dock"
import { Window } from "./Window"
import { usePathname } from 'next/navigation'
import DockProvider from "./DockProvider"
import { DockContext } from "./DockContext"

export const Desktop = ({children}) => {
    const [dockHeight, setDockHeight]           = useState(null)
    const heightRef                             = useRef(0)
    const path                                  = usePathname()

    useEffect(() => {
        setDockHeight(heightRef.current.clientHeight)
    }, [heightRef.current.clientHeight])

    return(
        <div>
            <DockProvider>
                <div className={`h-[calc(100dvh-67px)]`}>
                    {children}
                </div>
                <div className={`fixed bottom-0 w-full h-[67px] overflow-x-scroll overflow-y-hidden`}>
                    <Dock />
                </div>
            </DockProvider>
        </div>
    )
}