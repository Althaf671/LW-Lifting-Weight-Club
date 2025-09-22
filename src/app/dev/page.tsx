// testing page

import { BadgeCheck } from "lucide-react";
import { BlacklistedBadge, DefaultBadge, DestroyBadge, PrimaryBadge, VerifiedBadge } from "@/global/components/badge";
import { DefaultButton, DestroyButton, PrimaryButton, SecondaryButton } from "@/global/components/button";

export default function DevPage() {
    return (
        <div className="dev flex flex-column bg-black h-[100vh]
        justify-center items-center gap-[4em]"
        >
            <div className="dev flex bg-black min-h-screen 
            justify-center items-center gap-[1.5em]">
                <h2 className="text-lg">Buttons:</h2>
                <PrimaryButton>Primary</PrimaryButton>
                <SecondaryButton>Secondary</SecondaryButton>
                <DefaultButton>Default</DefaultButton>
                <DestroyButton>Destroy</DestroyButton>
            </div>

            <div className="dev flex bg-black min-h-screen 
            justify-center items-center gap-[1.5em]">
                <h2 className="text-lg">Badges:</h2>
                <PrimaryBadge>Active</PrimaryBadge>
                <DestroyBadge>Inactive</DestroyBadge>
                <DefaultBadge>Notification</DefaultBadge>
                <BlacklistedBadge>Blacklisted</BlacklistedBadge>
                <VerifiedBadge>
                    <BadgeCheck size={30} />
                    Verified
                </VerifiedBadge>
            </div>
            
        </div>
    );
};
