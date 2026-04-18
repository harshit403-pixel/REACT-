import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";

const BreadCrumbs = () => {
  let { pathname } = useLocation();
  let pathNames = pathname.split("/").filter((elem) => elem);

  return (
    <div className="flex items-center gap-1">
      {pathNames.map((elem, index) => {
        const fullPath = "/" + pathNames.slice(0, index + 1).join("/");

        return (
          <Link
            to={fullPath}
            key={elem}
            className="flex items-center gap-1 text-blue-500 text-sm font-semibold"
          >
            <ArrowRightIcon size={14} />
            {elem.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;