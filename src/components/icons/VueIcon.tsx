interface Props {
  color: string;
}

export default function VueIcon({ color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-10 ${color}`}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.5 4l-4.5 8l-4.5 -8" />
      <path d="M3 4l9 16l9 -16" />
    </svg>
  );
}
