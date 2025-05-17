import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const pathnames = useLocation()
    .pathname.split("/")
    .filter((x) => x);

  return (
    <div>
      <Link to="/">Home {">"}</Link>
      {pathnames.map((pathname, index) => {
        return (
          <>
            {index < pathnames.length - 1 ? (
              <Link to={`/${pathname}`}>
                {pathname} {">"}
              </Link>
            ) : (
              <span>{pathname}</span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
