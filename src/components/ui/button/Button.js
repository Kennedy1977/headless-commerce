import Link from "next/link";

export const Button = ({
  type,
  label,
  callback,
  style = "primary",
  size = "default",
}) => {
  const baseClasses = "mt-6 rounded-full text-lg/none";
  const primaryClasses = "bg-black text-white hover:bg-gray-700";
  const secondaryClasses =
    "bg-white text-black border border-black hover:bg-gray-200";
  const smallClasses = "px-4 py-2 text-sm";
  const defaultClasses = "px-6 py-4";

  const buttonClasses = `${baseClasses} ${
    style === "secondary" ? secondaryClasses : primaryClasses
  } ${size === "small" ? smallClasses : defaultClasses}`;

  if (type === "button") {
    return (
      <button
        aria-label={label}
        className={buttonClasses}
        onClick={() => callback()}
      >
        {label}
      </button>
    );
  }

  return (
    <Link aria-label={label} href={callback} className={buttonClasses}>
      {label}
    </Link>
  );
};
