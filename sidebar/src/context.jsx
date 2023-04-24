import { createContext, useContext, useState } from "react";

// created anew context object
export const AppContext = createContext();

//define a provider component
export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal =() => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider 
    value={{
        openSidebar, 
        closeSidebar, 
        openModal, 
        closeModal,
        isSidebarOpen,
        isModalOpen
        }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}