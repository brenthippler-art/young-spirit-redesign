import { useState } from "react";
import emailjs from "@emailjs/browser";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";

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

      <section className="border-b">
        <div className="wrap two-col">
          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 style={{ fontSize: 28 }}>Young Spirit Kennel</h2>
            <ul
              style={{
                paddingLeft: 0,
                listStyle: "none",
                marginTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                fontSize: 15,
              }}
            >
              <li>
                <b className="contact-label">Phone / Text</b>
                <a href="tel:2706054128">(270) 605-4128</a> &nbsp;·&nbsp;{" "}
                <a href="tel:2706054133">(270) 605-4133</a>
              </li>
              <li>
                <b className="contact-label">Location</b>Bowling Green, Kentucky
                — exact address shared upon inquiry
              </li>
              <li>
                <b className="contact-label">Hours</b>9 AM – 9 PM, daily
              </li>
              <li>
                <b className="contact-label">Social</b>
                <a href="https://www.facebook.com/Young.Spirit.Kennel">
                  Facebook — Young Spirit Kennel
                </a>
                <br></br>
                <a href="https://www.tiktok.com/@meg_faulkner">
                  TikTok — Young Spirit Kennel
                </a>
                <br />
              </li>
            </ul>
            <a
              href="tel:2706054128"
              className="btn btn-primary"
              style={{ marginTop: 28 }}
            >
              Call or Text Now
            </a>
          </div>

          <div>
            <Eyebrow>Send a Message</Eyebrow>
            <h2 style={{ fontSize: 22, marginBottom: 20 }}>
              Prefer to write it out?
            </h2>
            <div
              className="dogtag no-rivet"
              style={{ borderRadius: 8, padding: 26 }}
            >
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <div className="form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-info">Phone or Email</label>
                  <input
                    id="contact-info"
                    name="contact"
                    type="text"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="(555) 555-5555"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I'm interested in..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ marginTop: 4 }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="form-status success">
                    Message sent — we'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-status error">
                    Something went wrong sending that — please call or text us
                    at{" "}
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
          </div>
        </div>
      </section>
    </>
  );
}

const labelStyle = {
  color: "var(--brass-bright)",
  display: "block",
  fontFamily: "'Fraunces', serif",
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: 3,
};
