import React, {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";

export function debounce(func, wait) {
    let currentTimer = null;
    let lastArgs = null;
    let lastThis = null;

    return (...props) => {
        lastArgs = props;
        lastThis = this;
        clearTimeout(currentTimer);
        currentTimer = setTimeout(() => {
            func.apply(lastThis, lastArgs);
            lastArgs = null;
            lastThis = null;
        }, wait);
    };
}

export function throttling (func, delay) {
    let timer = null;
    let lastArgs = null;
    let lastThis = null;

    return (...args) => {
        if (timer) return;
        lastArgs = args;
        lastThis = this;

        timer = setTimeout(() => {
            func.apply(lastThis, lastArgs)
            clearTimeout(timer);
            lastArgs = null;
            lastThis - null
            timer = null;
        }, delay);
    };
}

export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max)
}

export function handleEsc(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
        this?.();
    }
}

export const useEscHandler = (callback) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (!callback) return;
        const handleEscWithCallback = handleEsc.bind(callback)
        document.addEventListener("keydown", handleEscWithCallback);
        return () => document.removeEventListener("keydown", handleEscWithCallback);
    }, [callback])
}

export function formatPhoneNumber(value) {
    const phone = value.replace(/\D/g, '');
    return phone.slice(0, 11).replace(/^(\d{1})?(\d{3})(\d{3})(\d{4})$/, "$1 ($2) $3-$4");
}

export function withFormProvider(Component, options) {
    // eslint-disable-next-line react/display-name
    return ({...props}) => {
        const methods = useForm(options);

        return (
            <FormProvider {...methods}>
                <Component {...props}/>
            </FormProvider>
        );
    }
}
