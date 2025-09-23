// navbar.tsx

import Image from "next/image";
import { ScanQrCode, TextAlignJustify,  } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "./button";

export default function Navbar() {
    return(
        <nav className="navbar">

            <div className="left__navbar">
                <Image
                    src="globe.svg"
                    width={35}
                    height={35}
                    alt="Logo"
                />
            </div>

            <div className="center__navbar">
                <Link href="/dev">
                    <LinkButton
                        ariaLabel="Lifting Weight"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}                         
                    >
                        Lifting Weight
                    </LinkButton>
                </Link>
            </div>

            <div className="right__navbar">
                <ScanQrCode />
                <TextAlignJustify />
            </div>

        </nav>
    );
};