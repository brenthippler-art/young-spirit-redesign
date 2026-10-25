import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import StarRating from "../components/StarRating";
import "./LeaveReview.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_REVIEW_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_REVIEW_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY_FORM = { name: "", contact: "", rating: 5, review: "" };

export default function LeaveReview() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

     const handleRatingChange = (rating) => {
     setForm((prev) => ({ ...prev, rating }));
   };

  const handleRatingClick = (rating) => {
    setForm((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missing = [
      !EMAILJS_SERVICE_ID && "VITE_EMAILJS_SERVICE_ID",
      !EMAILJS_REVIEW_TEMPLATE_ID && "VITE_EMAILJS_REVIEW_TEMPLATE_ID",
      !EMAILJS_PUBLIC_KEY && "VITE_EMAILJS_PUBLIC_KEY",
    ].filter(Boolean);

    if (missing.length > 0) {
      console.error(
        `EmailJS is not configured — missing from .env: ${missing.join(", ")}. ` +
          "Check .env.example, and restart the dev server after editing .env (Vite only reads it at startup).",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_REVIEW_TEMPLATE_ID,
        {
          from_name: form.name,
          from_contact: form.contact,
          rating: form.rating,
          message: form.review,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

    return (
    <>
      <Seo
        title="Leave a Review"
        description="Share your experience with a Young Spirit Kennel puppy or boarding stay."
        path="/leavereview"
      />

      <PageHero
        eyebrow="Leave a Review"
        title="Tell us how it went"
        intro="Whether it's about a puppy you brought home or a boarding stay, we'd love to hear from you. Reviews are read by Lee and Megan before they're posted to the site."
      />

      <section className="section">
        <div className="wrap review-wrap">
          <Reveal className="form-card">
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="review-name" className="label">Name</label>
                <input
                  id="review-name"
                  className="input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="review-contact" className="label">
                  Phone or Email <span className="field__hint">(optional)</span>
                </label>
                <input
                  id="review-contact"
                  className="input"
                  name="contact"
                  type="text"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                />
              </div>

              <fieldset className="field">
                <legend className="label">Rating</legend>
                <StarRating value={form.rating} onChange={handleRatingChange} />
              </fieldset>

              <div className="field">
                <label htmlFor="review-text" className="label">Your Review</label>
                <textarea
                  id="review-text"
                  className="input"
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn--solid form__submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Submit Review"}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="form-status form-status--success">
                    Thank you! Your review has been sent to Lee and Megan for
                    approval.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-status form-status--error">
                    Something went wrong sending that — please call or text us at{" "}
                    <a href="tel:2706054128" className="inline-link">
                      (270) 605-4128
                    </a>{" "}
                    instead.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          <p className="review-alt">
            <Link to="/contact" className="inline-link">
              Prefer to just reach out directly?
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}