import { createContext, useContext, useState } from "react";

export const MobileMenuContext = createContext();
MobileMenuContext.displayName = "MobileMenu"

export default function MobileProvider ({ children }) {

    const [open, setOpen] = useState(false);

    function toggleMenu () {
        setOpen(!open)
    }

    return (
        <MobileMenuContext.Provider value={{ open, toggleMenu }}>
            {children}
        </MobileMenuContext.Provider>
    )
}
