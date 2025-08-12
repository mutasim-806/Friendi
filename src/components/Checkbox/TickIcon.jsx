export default function TickIcon({
  className = "text-iconLight w-d-24 h-d-24",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      viewBox="0 0 16 14"
      fill="none"
      {...props}
    >
      <path
        d="M2 7.27636L5.75159 12L14 2"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
