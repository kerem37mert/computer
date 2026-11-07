import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.4}
      d="M10.2 9.6c4.5 4.3 9 8.9 13.6 13.9 4.5 4.8 9.1 9.8 14 15"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.4}
      d="M38.4 9.2c-4.8 4.6-9.5 9.5-14.2 14.6-4.5 4.9-9 9.8-14 14.8"
    />
  </svg>
);
export default SvgClose;
