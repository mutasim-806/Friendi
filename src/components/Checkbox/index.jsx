import TickIcon from "./TickIcon";
import IntermediateIcon from "./IntermediateIcon";

export default function Checkbox({
  checked = false,
  label = "Option",
  onChange = () => {},
  intermediate = false,
  size = "small",
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    small: "w-d-16 h-d-16",
    large: "w-d-24 h-d-24",
  };

  const fontClasses = {
    small: "text-body-md",
    large: "text-body-lg",
  };

  const tickIconSizes = {
    small: "w-d-8 h-d-6",
    large: "w-d-16 h-d-14",
  };

  const intermediateIconSizes = {
    small: { width: "w-d-10", height: 2 },
    large: { width: "w-d-16", height: 3 },
  };

  return (
    <label
      className={`inline-flex items-center cursor-pointer ${
        fontClasses[size]
      } ${disabled ? "text-interactiveDisabled pointer-events-none" : ""}`}
    >
      <span
        className={`inline-flex items-center justify-center ${
          sizeClasses[size]
        } ${disabled ? "bg-interactiveDisabled" : ""} ${
          checked || intermediate
            ? "bg-backgroundInteractivePrimary"
            : "border-2 border-borderDark"
        }`}
      >
        {intermediate && !checked && (
          <IntermediateIcon
            className={`text-iconLight`}
            height={intermediateIconSizes[size].height}
            width={intermediateIconSizes[size].width}
          />
        )}
        {checked && !intermediate && (
          <TickIcon className={`text-iconLight ${tickIconSizes[size]}`} />
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
        {...props}
      />
      {label && <span className="ps-d-8">{label}</span>}
    </label>
  );
}
