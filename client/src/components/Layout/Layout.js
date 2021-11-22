import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "./Layout.scss"

const Layout = function({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
