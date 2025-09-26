/* eslint-disable @typescript-eslint/no-unused-vars */
// button.tsx
"use client";

import { ButtonProps } from "../types";
import Loading from "./loading";

export function PrimaryButton({
    type = "submit",
    variant = "primary",
    children,
    onClick,
    disabled = false,
    isLoading = false,
    ariaLabel,
    ariaPressed,
    ariaExpanded,
    ariaControls,
    ariaDescribedBy,
    tabIndex,
    role,
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="primary__btn"
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-describedby={ariaDescribedBy}
            tabIndex={tabIndex}
            role={role}
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
    disabled = false,
    isLoading = false,
    ariaLabel,
    ariaPressed,
    ariaExpanded,
    ariaControls,
    ariaDescribedBy,
    tabIndex,
    role,
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="secondary__btn"
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-describedby={ariaDescribedBy}
            tabIndex={tabIndex}
            role={role}
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
    disabled = false,
    isLoading = false,
    ariaLabel,
    ariaPressed,
    ariaExpanded,
    ariaControls,
    ariaDescribedBy,
    tabIndex,
    role,
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="default__btn"
            onClick={onClick}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-describedby={ariaDescribedBy}
            tabIndex={tabIndex}
            role={role}
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
    disabled = false,
    isLoading = false,
    ariaLabel,
    ariaPressed,
    ariaExpanded,
    ariaControls,
    ariaDescribedBy,
    tabIndex,
    role,
}: ButtonProps) {
    return (
        <button 
            type={type}
            className="destroy__btn"
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-describedby={ariaDescribedBy}
            tabIndex={tabIndex}
            role={role}
        >
            {isLoading ? <Loading /> : children}
        </button>
    );
};

export function LinkButton({
    variant = "link",
    children,
    onClick,
    disabled = false,
    isLoading = false,
    ariaLabel,
    ariaPressed,
    ariaExpanded,
    ariaControls,
    ariaDescribedBy,
    tabIndex,
    role,
}: ButtonProps) {
    return (
        <button 
            className="link__btn"
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-describedby={ariaDescribedBy}
            tabIndex={tabIndex}
            role={role}
        >
                {isLoading ? <Loading /> : children}        
        </button>
    );
};
