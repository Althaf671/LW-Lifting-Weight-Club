// accordio.tsx

import { BadgeProps } from "../types";
import Loading from "./loading";

export function PrimaryBadge({
    status = "active",
    variant = "primary",
    children,
    isLoading = false
}: BadgeProps) {
    return (
        <div className="primary__bdg">
            {isLoading ? <Loading /> : children}
        </div>
    );
};

export function DestroyBadge({
    status = "inactive",
    variant = "destroy",
    children,
    isLoading = false
}: BadgeProps) {
    return (
        <div className="destroy__bdg">
            {isLoading ? <Loading /> : children}
        </div>
    );
};

export function DefaultBadge({
    variant = "default",
    children,
    isLoading = false
}: BadgeProps) {
    return (
        <div className="default__bdg">
            {isLoading ? <Loading /> : children}
        </div>
    );
};

export function BlacklistedBadge({
    status = "blacklisted",
    variant = "blacklisted",
    children,
    isLoading = false
}: BadgeProps) {
    return (
        <div className="blacklisted_bdg">
            {isLoading ? <Loading /> : children}
        </div>
    );
};

export function VerifiedBadge({
    status = "verified",
    variant = "verified",
    children,
    isLoading = false
}: BadgeProps) {
    return (
        <div className="verified__bdg">
            {isLoading ? <Loading /> : children}
        </div>
    );
};