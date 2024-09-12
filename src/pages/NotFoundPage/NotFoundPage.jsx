import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h3>Page Not Found</h3>
      <Link to="/">Go back to Homepage</Link>
    </div>
  );
};

export default NotFoundPage;
