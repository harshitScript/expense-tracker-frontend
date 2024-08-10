import React from "react"
import Navbar from "../Navbar/Navbar";

interface Layout1Props {
    children: React.ReactNode
}
const Layout1: React.FC<Layout1Props> = ({ children }) => {
    return <div>
        <section>
            <Navbar />
        </section>
        <main>
            {children}
        </main>
    </div>
}
export default Layout1;
