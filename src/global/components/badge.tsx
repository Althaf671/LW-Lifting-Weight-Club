// accordio.tsx

import { BadgeProps } from "../types";
import Loading from "./loading";

export function PrimaryBadge({
    status = "active",
    variant = "primary",
    children,
    isLoading = false,
    ariaLabel,
    role,
}: BadgeProps) {
    return (
        <span 
            aria-label={ariaLabel} 
            role={role}
            className="primary__bdg"
        >
            {isLoading ? <Loading /> : children}
        </span>
    );
};

export function DestroyBadge({
    status = "inactive",
    variant = "destroy",
    children,
    isLoading = false,
    ariaLabel,
    role
}: BadgeProps) {
    return (
        <span 
            aria-label={ariaLabel} 
            role={role}
            className="destroy__bdg"
        >
            {isLoading ? <Loading /> : children}
        </span>
    );
};

export function DefaultBadge({
    variant = "default",
    children,
    isLoading = false,
    ariaLabel,
    role
}: BadgeProps) {
    return (
        <span 
            aria-label={ariaLabel} 
            role={role}
            className="default__bdg"
        >
            {isLoading ? <Loading /> : children}
        </span>
    );
};

export function BlacklistedBadge({
    status = "blacklisted",
    variant = "blacklisted",
    children,
    isLoading = false,
    ariaLabel,
    role
}: BadgeProps) {
    return (
        <span 
            aria-label={ariaLabel} 
            role={role}
            className="blacklisted__bdg"
        >
            {isLoading ? <Loading /> : children}
        </span>
    );
};

export function VerifiedBadge({
    status = "verified",
    variant = "verified",
    children,
    isLoading = false,
    ariaLabel,
    role
}: BadgeProps) {
    return (
        <span 
            aria-label={ariaLabel} 
            role={role}
            className="verified__bdg"
        >
            {isLoading ? <Loading /> : children}
        </span>
    );
};