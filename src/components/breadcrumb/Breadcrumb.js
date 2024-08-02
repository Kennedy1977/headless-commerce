// components/Breadcrumb.js
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { translateTerm } from "../../utils/";

const Breadcrumb = () => {
  const router = useRouter();
  const pathParts = router.asPath.split("/").filter((part) => part);

  return (
    <nav aria-label="breadcrumb" className="flex items-center space-x-2 mb-4">
      <Link
        href="/"
        className="flex items-center space-x-1 text-gray-500 hover:underline"
      >
        <HomeIcon className="h-5 w-5" />
        <span>Home</span>
      </Link>
      {pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");
        const isLast = index === pathParts.length - 1;

        return (
          <div key={href} className="flex items-center space-x-2">
            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            {isLast ? (
              <span className="text-gray-500">{translateTerm(part)}</span>
            ) : (
              <Link href={href} className="text-gray-500 hover:underline">
                {translateTerm(part)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
