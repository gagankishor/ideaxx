import { Link } from "next/link";

export default function Error404() {
  return (
    <div className="container not-found">
      <p>
        <span>404 | Page Not Found</span>
        <span>
          <Link to="/">Return Home</Link>
        </span>
      </p>
    </div>
  );
}
