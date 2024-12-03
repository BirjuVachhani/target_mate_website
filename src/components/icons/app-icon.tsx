import { SVGProps } from 'react';

export function AppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="50" cy="50" r="50" fill="currentColor" className="text-primary/10" />
      <g transform="translate(25, 25)">
        <rect x="0" y="20" width="10" height="30" fill="currentColor" />
        <rect x="20" y="0" width="10" height="50" fill="currentColor" />
        <rect x="40" y="30" width="10" height="20" fill="currentColor" />
      </g>
    </svg>
  );
}