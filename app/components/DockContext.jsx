'use client'
 
import { createContext } from 'react'
 
export const DockContext = createContext({
    items: [],
    setItems: () => {}
})