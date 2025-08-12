import React, { useEffect, useState } from "react";

const themeRadius = {
  friendi: {
    large: "rounded-10",
    medium: "rounded-12",
    small: "rounded-12",
    default: "rounded-10",
  },
  virgin: {
    large: "rounded-6",
    medium: "rounded-8",
    small: "rounded-12",
    default: "rounded-12",
  },
  vcr: {
    large: "rounded-8",
    medium: "rounded-10",
    small: "rounded-12",
    default: "rounded-12",
  },
  friendiPay: {
    large: "rounded-10",
    medium: "rounded-10",
    small: "rounded-10",
    default: "rounded-10",
  },
  base: {
    default: "rounded-0",
  },
};

const getRadiusClass = (theme, size) => {
  if (themeRadius[theme]) {
    return themeRadius[theme][size] || themeRadius[theme].default;
  }
  return themeRadius.base.default;
};

const Button = ({
  text,
  type,
  size = "medium",
  disabled,
  chip,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  const [theme, setTheme] = useState("friendi");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    const getTheme = () => {
      if (html.classList.contains("virgin")) return "virgin";
      if (html.classList.contains("vcr")) return "vcr";
      if (html.classList.contains("friendiPay")) return "friendiPay";
      if (html.classList.contains("friendi")) return "friendi";
      return "base";
    };
    setTheme(getTheme());
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const typeClass =
    type === "primary"
      ? "bg-backgroundInteractivePrimary text-onButtonPrimary"
      : type === "secondary"
      ? "bg-backgroundInteractiveSecondary text-onButtonSecondary"
      : type === "tertiary"
      ? "bg-transparent text-primary"
      : "";

  const chipClass =
    chip === "outlined"
      ? "bg-transparent border border-borderDividerPrimary text-primary rounded-full"
      : chip === "filled"
      ? "bg-backgroundTertiary text-primary rounded-full"
      : "";

  const sizeClass =
    size === "large"
      ? "text-body-lg font-bold py-d-12 px-d-24 gap-d-8"
      : size === "medium"
      ? "text-body-md font-semibold py-d-8 px-d-16 gap-d-4"
      : "text-body-sm font-semibold py-d-8 px-d-12 gap-d-4";

  return (
    <button
      className={`
        max-h-max
        flex items-center justify-center
        ${
          disabled
            ? `${
                chip !== "outlined" && type !== "tertiary"
                  ? "bg-backgroundInteractiveDisabled"
                  : ""
              }  ${
                chip === "filled" || chip === "outlined"
                  ? "border rounded-full border-backgroundInteractiveDisabled"
                  : ""
              } cursor-not-allowed text-interactiveDisabled`
            : `hover:bg-backgroundInteractivePrimaryPressed hover:text-onButtonPrimary active:bg-backgroundInteractivePrimaryPressed    
            ${typeClass}
            ${chipClass}
            `
        }
        ${getRadiusClass(theme, size)}
        ${sizeClass}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon && <span className="flex items-center mr-1">{leftIcon}</span>}
      {text}
      {rightIcon && <span className="flex items-center ml-1">{rightIcon}</span>}
    </button>
  );
};

export default Button;
