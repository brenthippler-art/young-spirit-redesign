export default function Testimonial({ quote, who = 'Placeholder Review', rating = 5 }) {
  const stars = '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating));

  return (
    <div className="testi">
      <div className="stars">{stars}</div>
      <p>"{quote}"</p>
      <div className="who">— {who}</div>
    </div>
  );
}