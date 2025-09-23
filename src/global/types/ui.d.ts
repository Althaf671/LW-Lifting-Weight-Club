// ui.d.ts

// button type
export type ButtonProps = {
    type?: "submit" | "button";
    variant?: "primary" | "destroy" | "secondary" | "default" | "link";
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    ariaLabel: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
    ariaControls?: string;
    ariaDescribedBy?: string;
    tabIndex?: number;
    role: string;
};

// badges type
export type BadgeProps = {
    status?: "active" | "inactive" | "blacklisted" | "verified";
    variant?: "primary" | "destroy" | "default" | "blacklisted" | "verified";
    children: React.ReactNode;
    isLoading?: boolean;
    ariaLabel: string;
    role?: string;
};


// dropdown type
export type DropdownProps = {
    a:tring
};

// accordion type

// skeleton type