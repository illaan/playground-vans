import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <>
      <h1>
        <pre>Error: {error.message}</pre>
      </h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
}

export default Error;
