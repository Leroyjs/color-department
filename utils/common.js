import { FormProvider, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { breakpointsWidth, sizes } from "styles";

import Link from "next/link";
import { noScroll } from "../styles/reset.style";
import styled from "@emotion/styled";

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

export function throttling(func, delay) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  return (...args) => {
    if (timer) return;
    lastArgs = args;
    lastThis = this;

    timer = setTimeout(() => {
      func.apply(lastThis, lastArgs);
      clearTimeout(timer);
      lastArgs = null;
      lastThis - null;
      timer = null;
    }, delay);
  };
}

export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export function handleEsc(event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    this?.();
  }
}

export function useNoScroll(isOpen) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(noScroll);
    } else if (document.body.classList.contains(noScroll)) {
      document.body.classList.remove(noScroll);
    }
  }, [isOpen]);
}

export const useEscHandler = (callback) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!callback) return;
    const handleEscWithCallback = handleEsc.bind(callback);
    document.addEventListener("keydown", handleEscWithCallback);
    return () => document.removeEventListener("keydown", handleEscWithCallback);
  }, [callback]);
};

export function formatPhoneNumber(value) {
  const phone = value.replace(/\D/g, "");
  return phone
    .slice(0, 11)
    .replace(/^(\d{1})?(\d{3})(\d{3})(\d{4})$/, "$1 ($2) $3-$4");
}

export function withFormProvider(Component, options) {
  // eslint-disable-next-line react/display-name
  return ({ ...props }) => {
    const methods = useForm(options);

    return (
      <FormProvider {...methods}>
        <Component {...props} />
      </FormProvider>
    );
  };
}

export function withLink(Component) {
  // eslint-disable-next-line react/display-name
  return ({ link, target, ...props }) => {
    return (
      <Link href={link}>
        <a target={target}>
          <Component link={link} {...props} />
        </a>
      </Link>
    );
  };
}

export const MainComponent = styled.main`
  padding-top: ${sizes["desktopLG"].half};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    padding-top: ${sizes["tabletLG"].thirdX2};
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: ${sizes["tabletLG"].x1};
  }
`;
