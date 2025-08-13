import React from "react";
import DotIcon from "./DotIcon";

const RadioButton = ({ label, disabled, checked, onChange }) => {
  return (
    <div className="flex items-center gap-d-8">
      <button
        type="button"
        className={`p-0 border-2 ${
          disabled
            ? "border-interactiveDisabled"
            : checked
            ? "border-interactive"
            : "border-primary"
        } rounded-full flex justify-center align-middle focus:outline-none`}
        onClick={onChange}
        disabled={disabled}
        aria-checked={checked}
        role="radio"
        tabIndex={0}
      >
        <DotIcon disabled={disabled} checked={checked} />
      </button>
      {label && (
        <label
          className={`text-body-lg font-regular ${
            disabled ? "text-interactiveDisabled" : "text-primary"
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioButton;
