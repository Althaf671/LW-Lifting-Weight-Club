// button.tsx

import { ButtonProps } from "../types";
import Loading from "./loading";

export function PrimaryButton({
    type = "submit",
    variant = "primary",
    children,
    onClick,
    disabled,
    isLoading = false
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="primary__btn"
            onClick={onClick}
            disabled={disabled}
        >
            {isLoading ? <Loading /> : children}
        </button>
    );
};

export function SecondaryButton({
    type = "button",
    variant = "secondary",
    children,
    onClick,
    disabled,
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="secondary__btn"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export function DefaultButton({
    type = "button",
    variant = "default",
    children,
    onClick,
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="default__btn"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export function DestroyButton({
    type = "submit",
    variant = "destroy",
    children,
    onClick,
    disabled,
    isLoading = false
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="destroy__btn"
            onClick={onClick}
            disabled={disabled}
        >
            {isLoading ? <Loading /> : children}
        </button>
    );
};