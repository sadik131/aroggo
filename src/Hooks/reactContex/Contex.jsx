import React, { useContext, useState } from "react"

const ReactContex = React.createContext()


const AppProvider = ({ children }) => {

    const [open, setOpen] = useState(true)


    const state = {
        open, setOpen
    }
    return <ReactContex.Provider value={state}>{children}</ReactContex.Provider>
}


const useGlobalContex = () => {
    return useContext(ReactContex)
}


export { ReactContex, AppProvider, useGlobalContex }