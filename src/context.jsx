import { createContext, useContext,useState } from "react";
const AppContext = createContext()

export const AppProvaider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)

        document.body.classList.toggle("dark-theme", newDarkTheme)
    }

    return(
        <AppContext.Provider value={{isDarkTheme, toggleDarkTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)