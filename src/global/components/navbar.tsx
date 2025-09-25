// navbar.tsx
"use client";

import Image from "next/image";
import { Grip, ScanQrCode, X,  } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SidebarHome from "./sidebar.home";
 

export default function Navbar() {
    const [show, setShow] = useState(false);


    return(
        <nav className="navbar">

            <div className="left__navbar">
                <Image
                    src="logo.svg"
                    width={35}
                    height={35}
                    alt="Logo"
                    className="logo"
                />
            </div>

            <div className="center__navbar">
                <Link href="/dev">

                </Link>
            </div>

                <div className="right__navbar">
                <ScanQrCode width={37} height={37} className="qr-btn" />
                
                <div className="toggle-btn-wrapper" onClick={() => setShow(!show)}>
                    <div className="toggle-btn-border">
                        <Grip className={`menu ${show ? "hide" : "show"}`} width={39} height={39} />
                        <X className={`close ${show ? "show" : "hide"}`} width={39} height={39} />
                    </div>
                </div>
            </div>

            <SidebarHome show={show} onClose={()=> setShow(false)} />

        </nav>
    );
};