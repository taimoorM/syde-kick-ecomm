import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="ErrorPage">
      <div className="wrapper">
        <h2>404 Error</h2>
        <p>Looks like this does not exist.</p>
        <Link to="/">
          <FontAwesomeIcon className="backLink" icon={faAngleLeft} />
          Back
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
