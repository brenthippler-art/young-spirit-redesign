import { useState } from "react";
import emailjs from "@emailjs/browser";
   import PageHero from "../components/PageHero";
   import Reveal from "../components/Reveal";
   import Seo from "../components/Seo";
   import "./Contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY_FORM = { name: "", contact: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured — set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and " +
          "VITE_EMAILJS_PUBLIC_KEY in your .env file (see .env.example).",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_contact: form.contact,
          message: form.message,
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
        title="Contact Us | Bowling Green, KY"
        description="Reach Young Spirit Kennel in Bowling Green, KY about puppies, litters, or boarding. Call (270) 605-4128 or send us a message online."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact Us"
        title="Reach out — call, text, or message"
        intro="Whether you're asking about an upcoming litter, boarding a dog, or just want to say hello, we're easiest to reach by phone."
      />

      <section className="section">
        <div className="wrap split contact-layout">
          {/* ---------- DETAILS ---------- */}
          <Reveal>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="title">
              Call or text <em>any day.</em>
            </h2>

            <a href="tel:2706054128" className="contact-phone">
              (270) 605-4128
            </a>

            <dl className="contact-details">
              <div>
                <dt className="label">Second Line</dt>
                <dd>
                  <a href="tel:2706054133" className="inline-link">
                    (270) 605-4133
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">Hours</dt>
                <dd>9 AM – 9 PM, daily</dd>
              </div>
              <div>
                <dt className="label">Location</dt>
                <dd>Bowling Green, Kentucky — exact address shared upon inquiry</dd>
              </div>
              <div>
                <dt className="label">Social</dt>
                <dd>
                  <a
                    href="https://www.facebook.com/Young.Spirit.Kennel"
                    className="inline-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  {" · "}
                  <a
                    href="https://www.tiktok.com/@meg_faulkner"
                    className="inline-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* ---------- FORM ---------- */}
          <Reveal className="form-card" delay={150}>
            <p className="eyebrow">Send a Message</p>
            <h2 className="contact-form__title">Prefer to write it out?</h2>

            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="contact-name" className="label">Name</label>
                <input
                  id="contact-name"
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
                <label htmlFor="contact-info" className="label">Phone or Email</label>
                <input
                  id="contact-info"
                  className="input"
                  name="contact"
                  type="text"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message" className="label">Message</label>
                <textarea
                  id="contact-message"
                  className="input"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="I'm interested in..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn--solid form__submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="form-status form-status--success">
                    Message sent — we'll get back to you soon.
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
        </div>
      </section>
    </>
  );
}
