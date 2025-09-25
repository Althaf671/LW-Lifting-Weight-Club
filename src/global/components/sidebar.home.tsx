// sidbar.home.tsx

import { BotMessageSquare, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SidebarHomeProps = {
    show: boolean;
    onClose: () => void
};

export default function SidebarHome({ show }: SidebarHomeProps) {
    return (
        <aside className={`sidebar__home ${show ? " show" : ""}`}>
     
            {/* Upper sidebar */}
            <div className="sidebar-home__upper__sidebar">
                <div className="logo">Logo</div>
            </div>

            {/* Center sidebar */}
            <div className="sidebar-home__center__sidebar">

                <div className="membership-link">membership</div>

                <div className="shop-link">shop</div>

                <div className="additional-wrapper">
                    <div className="coach-link">
                        <Image
                            src="https://res.cloudinary.com/dyxqjq1yp/image/upload/v1758824657/pexels-julia-larson-6456215_el0mqh.webp"
                            width={100}
                            height={50}
                            alt="Train with coach"
                            decoding="async"
                        />
                        <p>coach</p>
                    </div>
                    <div className="support-link">
                        <BotMessageSquare width={35} height={35} />
                        <p>Support</p>
                    </div>
                </div>

                <div className="account-link">
                   <Link href="/client" aria-label="your dashboard link">My Account</Link>
                </div>

            </div>

            {/* Lower sidebar */}
            <div className="sidebar-home__lower__sidebar">

                {/* main content */}
                <div className="sidebar-home-upper__lower-sidebar">
                    <div className="sidebar-home__lower__sidebar__left">
                        <div className="company-footer">
                            <h3>Company</h3>
                            <p>about</p>
                            <p>terms</p>
                            <p>cookies</p>
                            <p>location</p>
                        </div>
                        <div className="social-footer">
                            <h3>Social</h3>
                            <p>instagram</p>
                            <p>X</p>
                            <p>youtube</p>
                        </div>
                    </div>
                    <div className="sidebar-home__lower__sidebar__right">

                    </div>                    
                </div>

                {/* copyright */}
                <div className="sidebar-home-lower__lower-sidebar">
                    <p>Copyright Lifting Weight Club. All rights reserved.</p>
                </div>

            </div>

        </aside>
    );
};