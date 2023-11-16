'use client'

import { useContext, useEffect, useState } from "react"
import { DockContext } from "./DockContext"

export const DesktopWindow = ({children}) => {
    const dock      = useContext(DockContext)


    useEffect(() => {
        setWindowHeight(dock.dockHeight)
    }, [dock.dockHeight, dock.items])

    return(
        <div>
            {children}
        </div>
    )
}