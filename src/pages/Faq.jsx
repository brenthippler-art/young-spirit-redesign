import { Link } from 'react-router-dom';
import Eyebrow from '../components/Eyebrow';
import FaqItem from '../components/FaqItem';

export default function Faq() {
  return (
    <section style={{ paddingTop: 120 }}>
      <div className="wrap">
        <Eyebrow>FAQ</Eyebrow>
        <h1 style={{ fontSize: 44, maxWidth: 700 }}>Common questions</h1>

        <div className="kicker-block" style={{ marginTop: 20, maxWidth: '100%' }}>
          <FaqItem question="What's included with a puppy?" defaultOpen>
            Up-to-date shots and worming, a vet check, microchip, and AKC registration papers.
            Tails are docked, dew claws removed, and ears cropped unless you request otherwise —
            that requires payment up front. We begin crate training, and send home an ear care kit and a quart-sized bag of puppy food. 
          </FaqItem>

          <FaqItem question="What is your breeding philosophy?">
            At Young Spirit Kennel, our goal is to produce healthy, well-rounded companions that represent their breeds in both appearance and temperament. We’re dedicated to raising quality dogs with the health, temperament, and companionship families are looking for.
          </FaqItem>

          <FaqItem question="How do deposits and the waitlist work?">
            When a litter is announced, deposits open and set pick order. Once puppies are born we
            announce number, gender, and color. You don't need a deposit to join the general
            waitlist, but it does affect your place in pick order.
          </FaqItem>

          <FaqItem question="What forms of payment do you accept?">
            For your convenience, Young Spirit accepts cash payments in person, or electronic payments through Apple Pay or Venmo.
          </FaqItem>

          <FaqItem question="Do you offer a health guarantee?">
            Yes — full terms are laid out in your <Link to="/litters#agreement" style={{ color: 'var(--brass-bright)', textDecoration: 'underline' }}>puppy contract</Link>.
          </FaqItem>

          <FaqItem question="What if I can't keep my dog anymore?">
            If for any reason your family can no longer keep your pup, it's returned to us — no
            refund is issued.
          </FaqItem>

          <FaqItem question="Do you offer boarding?">
            Yes — see our <Link to="/boarding" style={{ color: 'var(--brass-bright)', textDecoration: 'underline' }}>Boarding page</Link> for
            current rates, what's included, and what to know before drop-off.
          </FaqItem>

          <FaqItem question="Are your dogs AKC registered?">
            Yes, all of our dogs are AKC registered. To help protect against fraud, we do not publish registration numbers on our website — these are available to verified buyers upon request. If you have any questions about registration, please contact us directly via email, phone call or FaceTime.
          </FaqItem>

          <FaqItem question="How do I get in touch with you?">
            The easiest way to communicate with us is through a text or a phone call. We also
            have a form on our{' '}
            <Link to="/contact" style={{ color: 'var(--brass-bright)', textDecoration: 'underline' }}>
              Contact Page
            </Link>{' '}
            that you can use to send us a message, or you can find us on Facebook or Instagram.
            <ul
              style={{
                paddingLeft: 0,
                listStyle: 'none',
                marginTop: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                fontSize: 15,
              }}
            >
              <li>
                <b className="contact-label">Phone / Text</b>
                <a href="tel:2706054128">(270) 605-4128</a> &nbsp;·&nbsp;{' '}
                <a href="tel:2706054133">(270) 605-4133</a>
              </li>
              <li>
                <b className="contact-label">Location</b>Bowling Green, Kentucky — exact address shared upon inquiry
              </li>
              <li>
                <b className="contact-label">Hours</b>9 AM – 9 PM, daily
              </li>
              <li>
                <b className="contact-label">Social</b>
                <a href="https://www.facebook.com/Young.Spirit.Kennel">Facebook — Young Spirit Kennel</a>
                <br />
                <a href="https://www.tiktok.com/@meg_faulkner">TikTok — Young Spirit Kennel</a>
              </li>
            </ul>
            <a href="tel:2706054128" className="btn btn-primary" style={{ marginTop: 28 }}>
              Call or Text Now
            </a>
          </FaqItem>

          <FaqItem question="Can I leave a review?">
            Absolutely — we'd love to hear how your pup or boarding stay went. You may leave a review <Link to="/leavereview" style={{ color: 'var(--brass-bright)', textDecoration: 'underline' }}>on our website</Link>, or reach out on
            Facebook or by phone. 
          </FaqItem>
        </div>
      </div>
    </section>
  );
}
