export default function IntermediateIcon({
  className = "text-iconLight",
  width = "w-d-16",
  height = 3,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-d-16 ${className}`}
      viewBox="0 0 16 4"
      fill="none"
      {...props}
    >
      <path
        className={`${width}`}
        d="M1.5 3.83337C0.671573 3.83337 0 3.1618 0 2.33337C0 1.50495 0.671573 0.833374 1.5 0.833374H14.5C15.3284 0.833374 16 1.50495 16 2.33337C16 3.1618 15.3284 3.83337 14.5 3.83337H1.5Z"
        fill="currentColor"
        strokeWidth={height}
      />
    </svg>
  );
}
