import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you were looking for doesn't exist."
        path="/404"
      />
      <meta name="robots" content="noindex" />

      <PageHero
        eyebrow="404"
        title="This page wandered off."
        intro="The link may be old, or the address may have a typo. Here are a few good places to pick the trail back up."
      >
        <div className="btn-row">
          <Link to="/" className="btn btn--solid">Back to Home</Link>
          <Link to="/litters" className="btn btn--ghost">View Litters</Link>
        </div>
      </PageHero>
    </>
  );
}