// testing page
"use client";

import { 
BadgeCheck, 
Bell, 
BellDot, 
ChartColumnBig, 
ChartPie, 
Fingerprint, 
HatGlasses, 
LayoutDashboard, 
LockKeyhole, 
RectangleEllipsis, 
Settings, 
User, 
UserCog, 
UserMinus, 
UserRoundPen, 
Wallet,
History,
ListChevronsUpDown,
Mail,
Server,
BotMessageSquare,
ScrollText,
ShoppingBasket,
HandCoins,
Utensils,
DoorOpen,
ShieldUser,
Dock,
RotateCcwKey,
RefreshCwOff,
Plus,
RefreshCcwDot,
MailCheck,
ScanQrCode
} from "lucide-react";
import { 
BlacklistedBadge, 
DefaultBadge, 
DestroyBadge, 
PrimaryBadge, 
VerifiedBadge 
} from "@/global/components/badge";
import { 
DefaultButton, 
DestroyButton, 
LinkButton, 
PrimaryButton, 
SecondaryButton } from "@/global/components/button";
import { toast } from "sonner";
import Link from "next/link";

export default function DevPage() {
    return (
        <div className="dev"
        >
            <div className="inner_dev_container">
                <div className="item-container flex
                justify-center items-center gap-[1.5em]">
                    <h2 className="text-lg">Buttons:</h2>
                    <PrimaryButton
                        ariaLabel="Primary Button"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}
                    >
                        Primary
                    </PrimaryButton>
                    <SecondaryButton
                        ariaLabel="Secondary Button"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}
                    >
                        Secondary
                    </SecondaryButton>
                    <DefaultButton
                        ariaLabel="Default Button"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}
                    >
                        Default
                    </DefaultButton>
                    <DestroyButton
                        ariaLabel="Destroy Button"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}
                    >
                        Destroy
                    </DestroyButton>
                    <Link href="/dev">
                        <LinkButton
                            ariaLabel="Link Button"
                            ariaControls=""
                            role="button"
                            ariaPressed={true}
                            ariaExpanded={false}
                            ariaDescribedBy=""
                            tabIndex={0}                        
                        >
                            Link
                        </LinkButton>
                    </Link>
                </div>

                <div className="item-container flex
                justify-center items-center gap-[1.5em]">
                    <h2 className="text-lg">Badges:</h2>
                    <PrimaryBadge
                        ariaLabel="Status Active"
                    >
                        Active
                    </PrimaryBadge>
                    <DestroyBadge
                        ariaLabel="Status Inactive"
                    >
                        Inactive
                    </DestroyBadge>
                    <DefaultBadge
                        ariaLabel="Notification popup"
                    >
                        +9
                    </DefaultBadge>
                    <BlacklistedBadge
                        ariaLabel="Status Blacklisted"
                    >
                        Blacklisted
                    </BlacklistedBadge>
                    <VerifiedBadge
                        ariaLabel="User Verified"
                    >
                        <BadgeCheck size={20} />
                        Verified
                    </VerifiedBadge>
                </div>                
                <div className="item-container flex
                justify-center items-center gap-[1.5em]">
                    <h2 className="text-lg">Toast:</h2>
                    <PrimaryButton
                        ariaLabel="Primary Button that will display success toast"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}
                        onClick={() => toast.success("Success to show toast")}
                    >
                        Submit
                    </PrimaryButton> 
                    <SecondaryButton
                        ariaLabel="Secondary Button that will display info toast"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}
                        onClick={() => toast.info("Toast canceled")}                    
                    >
                        Cancel
                    </SecondaryButton>    
                    <DestroyButton
                        ariaLabel="Destroy Button that will display error toast"
                        ariaControls=""
                        role="button"
                        ariaPressed={true}
                        ariaExpanded={false}
                        ariaDescribedBy=""
                        tabIndex={0}
                        onClick={() => toast.error("Failed to show toast")}                    
                    >
                        Error
                    </DestroyButton>                 
                </div>
                <div className="item-container gap-[1.5em]">
                    <h2 className="text-lg">Icons:</h2>
                    <DefaultBadge ariaLabel="Dashboard Badge">
                        <LayoutDashboard />
                        <p>Dashboard</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Finance">
                        <HandCoins />
                        <p>Finance</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Manage Member">
                        <UserCog />
                        <p>Manage Member</p>
                    </DefaultBadge>     
                    <DefaultBadge ariaLabel="Log">
                        <ScrollText />
                        <p>Log</p>
                    </DefaultBadge>   
                    <DefaultBadge ariaLabel="Notification">
                        <BellDot />
                        <p>Notification</p>
                    </DefaultBadge>                               
                    <DefaultBadge ariaLabel="Setting Badge">
                        <Settings />
                        <p>Setting</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Logout">
                        <DoorOpen />
                        <p>Logout</p>
                    </DefaultBadge>                   
                    <DefaultBadge ariaLabel="QR code Badge">
                        <ScanQrCode />
                        <p>QR code</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Money Badge">
                        <Wallet />
                        <p>Payment</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Manage Plan">
                        <Dock />
                        <p>Manage Plan</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Empty Notification">
                        <Bell />
                        <p>Empty Notification</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Forgot Password">
                        <Fingerprint />
                        <p>Forgot Password</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Reset Password">
                        <RectangleEllipsis />
                        <p>Reset Password</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Password">
                        <LockKeyhole />
                        <p>Password</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="User">
                        <User />
                        <p>User</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Blacklist Member">
                        <UserMinus />
                        <p>Blacklist Member</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Edit Profile">
                        <UserRoundPen />
                        <p>Edit Profile</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Chart">
                        <ChartColumnBig />
                        <p>Chart</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Pie Chart">
                        <ChartPie />
                        <p>Pie Chart</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Suspicious">
                        <HatGlasses />
                        <p>Suspicious</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="History">
                        <History />
                        <p>History</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="List">
                        <ListChevronsUpDown />
                        <p>List</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Email">
                        <Mail />
                        <p>Email</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Server">
                        <Server />
                        <p>Server</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Chatbot">
                        <BotMessageSquare />
                        <p>Chatbot</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Log">
                        <ScrollText />
                        <p>Log</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Cart">
                        <ShoppingBasket />
                        <p>Cart</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Eating Area">
                        <Utensils />
                        <p>Eating Area</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="2 Factor Authentication">
                        <ShieldUser />
                        <p>2 FA</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Token Rotation">
                        <RotateCcwKey />
                        <p>Token Rotation</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Cancel Plan">
                        <RefreshCwOff />
                        <p>Cancel Plan</p>
                    </DefaultBadge>
                    <DefaultBadge  ariaLabel="Add Plan">
                        <Plus />
                        <p>Add Plan</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Renew QR code">
                        <RefreshCcwDot />
                        <p>Renew QR code</p>
                    </DefaultBadge>
                    <DefaultBadge ariaLabel="Verify">
                        <MailCheck />
                        <p>Verify</p>
                    </DefaultBadge>
                </div>
            </div>

        </div>
    );
};
