'use client'

import { useState, useContext, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { DockContext } from "./DockContext"
import { Close, ArrowDown } from "./Icons"


export const Window = ({children, title, path}) => {
    const [close, setClose]                     = useState(false)
    //const [message, setMessage]                 = useState(false)
    const router                                = useRouter()
    const dock                                  = useContext(DockContext);

    function minimizeWindow() {

        let found = false;

        dock.items.forEach((item, index) => {
            if (item.path === path) {
                found = true;
            }
        })

        if (!found){
            dock.setItems([...dock.items, {title: title, path: path}])
        }

        setClose(true)
        router.push('/')
        
    }

    function closeWindow() {
        dock.items.forEach((item, index) => {
            let found = false;
            if (item.path === path) {
                found = true;
            }

            if (found){
                dock.items.splice(index, 1)
                dock.setItems(dock.items)
            }
        })
        setClose(true)
        router.push('/', undefined, { shallow: true })
    }

    useEffect(() => {
        setClose(false)
    }, [])

    useEffect(() => {
    }, [dock.items])

    return (
        <>
        {!close &&
            <div className={`p-2 pb-4 md:px-10 md:py-6 absolute top-0 w-full h-full overflow-hidden max-h-[calc(100dvh-67px)]`}>
                <div className={`relative rounded border border-white h-full overflow-hidden shadow-glow shadow-sky-400/20`}>
                    <div className={`absolute top-0 left-0 w-full h-full backdrop-blur-sm dark:backdrop-blur bg-slate-50 bg-opacity-5`}></div>
                    <div className={`relative flex justify-between pt-2 pb-1 px-4 text-white border-b border-white`}>
                        <div className={`uppercase`}>
                            {title}
                        </div>
                        <div className={`flex justify-end gap-1`}>
                            <button className={`bg-transparent w-5 h-5 flex items-center justify-center p-[0.125rem] rounded-full text-white border border-white`} onClick={() => minimizeWindow(title, path)}>
                                <ArrowDown />
                            </button>
                            <button className={`bg-transparent w-5 h-5 flex items-center justify-center p-[0.125rem] rounded-full text-white border border-white`} onClick={() => closeWindow()}>
                                <Close />
                            </button>
                        </div>
                    </div>
                    <div className={`relative overflow-scroll h-[calc(100%-2.5rem)] py-10`}>{children}</div>
                </div>
            </div>
        }
        </>
    )
}