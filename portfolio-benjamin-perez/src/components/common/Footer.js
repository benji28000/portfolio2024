import React from "react";

const Footer = () => {
    return (
        <footer className="h-48 bg-[#173753] text-white flex items-center justify-center">
                <div className="">
                    <div className="  text-2xl font-bold mb-2">
                        <a href="/" className="">
                            Benjamin Perez
                        </a>
                    </div>
                    <hr className={"border-t border-neon-blue"}/>
                    <div className="text-sm mt-2">
                        <p>© 2021 Benjamin Perez</p>
                    </div>
            </div>
        </footer>
    );
}
export default Footer;