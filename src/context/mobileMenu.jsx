import { createContext, useContext, useState } from "react";

export const MobileMenuContext = createContext();
MobileMenuContext.displayName = "MobileMenu"

export default function MobileProvider ({ children }) {

    const [open, setOpen] = useState(false);

    return (
        <MobileMenuContext.Provider value={{ open, setOpen }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export function useMobileMenu() {
    const { open, setOpen } = useContext(MobileMenuContext);
    setOpen(!open);
}
