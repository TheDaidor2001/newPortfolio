const LinkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-w-14 text-gray-950 bg-secondary-color rounded-full hidden lg:block p-2 scale-0 transition-transform group-hover:scale-100"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </svg>
  );
};

export default LinkIcon;
