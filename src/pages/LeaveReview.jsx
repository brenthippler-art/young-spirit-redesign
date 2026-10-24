import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_REVIEW_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_REVIEW_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY_FORM = { name: "", contact: "", rating: 5, review: "" };

export default function LeaveReview() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
        <div className="wrap" style={{ maxWidth: 640 }}>
          <div
            className="dogtag no-rivet"
            style={{ borderRadius: 8, padding: 26, marginTop: 32 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div className="form-field">
                <label htmlFor="review-name">Name</label>
                <input
                  id="review-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="review-contact">
                  Phone or Email (optional)
                </label>
                <input
                  id="review-contact"
                  name="contact"
                  type="text"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                />
              </div>

              <div className="form-field">
                <label>Rating</label>
                <div
                  className="star-picker"
                  role="radiogroup"
                  aria-label="Rating"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={`star-picker-btn${n <= form.rating ? " filled" : ""}`}
                      role="radio"
                      aria-checked={n === form.rating}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      onClick={() => handleRatingClick(n)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="review-text">Your Review</label>
                <textarea
                  id="review-text"
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: 4 }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Submit Review"}
              </button>

              {status === "success" && (
                <p className="form-status success">
                  Thank you! Your review has been sent to Lee and Megan for
                  approval.
                </p>
              )}
              {status === "error" && (
                <p className="form-status error">
                  Something went wrong sending that — please call or text us at{" "}
                  <a
                    href="tel:2706054128"
                    style={{ textDecoration: "underline" }}
                  >
                    (270) 605-4128
                  </a>{" "}
                  instead.
                </p>
              )}
            </form>
          </div>

          <p style={{ fontSize: 13, opacity: 0.6, marginTop: 24 }}>
            <Link
              to="/contact"
              style={{
                color: "var(--brass-bright)",
                textDecoration: "underline",
              }}
            >
              Prefer to just reach out directly?
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
