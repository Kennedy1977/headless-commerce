import Link from "next/link";

export const Button = ({ type, label, callback }) => {
  if (type === "button") {
    return (
      <>
        <button
          aria-label={label}
          className="mt-6 px-7 py-4 bg-black text-white text-lg/none rounded-full  hover:bg-gray-700"
          onClick={() => callback()}
        >
          {label}
        </button>
      </>
    );
  }

  return (
    <>
      <Link
        aria-label={label}
        href={callback}
        className="mt-6 px-7 py-[13px] bg-black text-white text-lg/none rounded-full hover:bg-gray-700"
      >
        {label}
      </Link>
    </>
  );
};
