import React from "react";
import CustomHeader from "./header";

const Layout = ({ children }) => {
    return (
        <div className="mx-auto md:h-screen lg:py-0">
            <CustomHeader />
            {children}
        </div>
    );

}

export default Layout