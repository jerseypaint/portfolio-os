'use client'
 
import { useState } from 'react'
import { DockContext } from './DockContext'
 
export default function DockProvider({ children }) {
    const [items, setItems] = useState([])
    
    return <DockContext.Provider value={
        {
            items: items,
            setItems: setItems
        }
    }>{children}</DockContext.Provider>
}