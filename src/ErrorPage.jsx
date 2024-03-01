import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Oh no, this route does not exist!</h1>
      <Link to="/">You can go back to the home page by clicking here!</Link>
    </>
  );
}

export default ErrorPage;
