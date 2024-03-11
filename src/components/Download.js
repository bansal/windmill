export const Download = () => {
  return (
    <a
      href="https://bansal.gumroad.com/l/windmill-saas"
      className="fixed bottom-0 left-4 flex justify-center items-center gap-1 rounded-t h-10 px-4 text-sm bg-green-500 text-white hover:scale-105 duration-200 ease-linear"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="size-5"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
        />
      </svg>
      Download Theme
    </a>
  );
};
