import { Link } from "react-router-dom";
import FaqItem from "../components/FaqItem";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import "./Faq.css";

export default function Faq() {
  return (
    <>
      <Seo
        title="Puppy & Boarding Questions Answered"
        description="Answers to common questions about buying a Doberman or Rottweiler puppy and boarding your dog at Young Spirit Kennel in Bowling Green, Kentucky."
        path="/faq"
      />

      <PageHero
        eyebrow="FAQ"
        title="Common questions"
        intro="Puppies, deposits, payments and boarding — the answers families ask for most."
      />

      <section className="section">
        <div className="wrap faq-layout">
          <Reveal className="faq-list">
            <FaqItem question="What's included with a puppy?" defaultOpen>
              Up-to-date shots and worming, a vet check, microchip, and AKC
              registration papers. Tails are docked, dew claws removed, and ears
              cropped unless you request otherwise — that requires payment up
              front. We begin crate training, and send home an ear care kit and
              a quart-sized bag of puppy food.
            </FaqItem>

            <FaqItem question="What is your breeding philosophy?">
              At Young Spirit Kennel, our goal is to produce healthy,
              well-rounded companions that represent their breeds in both
              appearance and temperament. We're dedicated to raising quality
              dogs with the health, temperament, and companionship families are
              looking for.
            </FaqItem>

            <FaqItem question="How do deposits and the waitlist work?">
              When a litter is announced, deposits open and set pick order. Once
              puppies are born we announce number, gender, and color. You don't
              need a deposit to join the general waitlist, but it does affect
              your place in pick order.
            </FaqItem>

            <FaqItem question="What forms of payment do you accept?">
              For your convenience, Young Spirit accepts cash payments in
              person, or electronic payments through Apple Pay or Venmo.
            </FaqItem>

            <FaqItem question="Do you offer a health guarantee?">
              Yes — full terms are laid out in your{" "}
              <Link to="/litters#agreement" className="inline-link">
                puppy contract
              </Link>
              .
            </FaqItem>

            <FaqItem question="What if I can't keep my dog anymore?">
              If for any reason your family can no longer keep your pup, it's
              returned to us — no refund is issued.
            </FaqItem>

            <FaqItem question="Do you offer boarding?">
              Yes — see our{" "}
              <Link to="/boarding" className="inline-link">
                Boarding page
              </Link>{" "}
              for current rates, what's included, and what to know before
              drop-off.
            </FaqItem>

            <FaqItem question="Are your dogs AKC registered?">
              Yes, all of our dogs are AKC registered. To help protect against
              fraud, we do not publish registration numbers on our website —
              these are available to verified buyers upon request. If you have
              any questions about registration, please contact us directly via
              email, phone call or FaceTime.
            </FaqItem>

            <FaqItem question="How do I get in touch with you?">
              The easiest way to communicate with us is through a text or a
              phone call. We also have a form on our{" "}
              <Link to="/contact" className="inline-link">
                Contact page
              </Link>{" "}
              that you can use to send us a message, or you can find us on
              Facebook or TikTok.
              <dl className="faq-contact">
                <div>
                  <dt className="label">Phone / Text</dt>
                  <dd>
                    <a href="tel:2706054128" className="inline-link">(270) 605-4128</a>
                    {" · "}
                    <a href="tel:2706054133" className="inline-link">(270) 605-4133</a>
                  </dd>
                </div>
                <div>
                  <dt className="label">Location</dt>
                  <dd>Bowling Green, Kentucky — exact address shared upon inquiry</dd>
                </div>
                <div>
                  <dt className="label">Hours</dt>
                  <dd>9 AM – 9 PM, daily</dd>
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
            </FaqItem>

            <FaqItem question="Can I leave a review?">
              Absolutely — we'd love to hear how your pup or boarding stay went.
              You may leave a review{" "}
              <Link to="/leavereview" className="inline-link">
                on our website
              </Link>
              , or reach out on Facebook or by phone.
            </FaqItem>
          </Reveal>

          <Reveal as="aside" className="faq-aside" delay={150}>
            <p className="eyebrow">Still Have Questions?</p>
            <h2 className="title">
              We're easiest to reach <em>by phone.</em>
            </h2>
            <p>
              Call or text any day from 9 AM to 9 PM — we're happy to talk
              through litters, deposits, or boarding.
            </p>
            <div className="faq-aside__actions">
              <a href="tel:2706054128" className="btn btn--solid">
                Call or Text
              </a>
              <Link to="/contact" className="btn btn--ghost">
                Send a Message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}