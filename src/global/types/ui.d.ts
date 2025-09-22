// ui.d.ts

// button type
export type ButtonProps = {
    type?: "submit" | "button";
    variant?: "primary" | "destroy" | "secondary" | "default";
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
};

// badges type
export type BadgeProps = {
    status?: "active" | "inactive" | "blacklisted" | "verified";
    variant?: "primary" | "destroy" | "default" | "blacklisted" | "verified";
    children: React.ReactNode;
    isLoading?: boolean;
};