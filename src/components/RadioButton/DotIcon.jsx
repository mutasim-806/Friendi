export default function DotIcon({
  disabled,
  checked,
  className = "w-d-20 h-d-20",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${
        disabled ? "text-iconInteractiveDisabled" : "text-iconInteractive"
      }`}
      viewBox="0 0 16 16"
      fill={`${checked ? "currentColor" : "none"}`}
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="5"
        fill={`${checked ? "currentColor" : "none"}`}
      />
    </svg>
  );
}
