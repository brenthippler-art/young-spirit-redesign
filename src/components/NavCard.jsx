import { Link } from 'react-router-dom';

export default function NavCard({ kicker, title, description, to, linkLabel }) {
  return (
    <div className="navcard">
      <div className="k">{kicker}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={to} className="go">{linkLabel} →</Link>
    </div>
  );
}
