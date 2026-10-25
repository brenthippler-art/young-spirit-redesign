import { useId, useState } from 'react';
import './FaqItem.css';

export default function FaqItem({ question, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId(); // unique per item, links the button to its answer

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <h3 className="faq-q-wrap">
        <button
          type="button"
          className="faq-q"
          id={`${id}-question`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{question}</span>
          <span className="faq-icon" aria-hidden="true" />
        </button>
      </h3>

      <div
        className="faq-a"
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        inert={!open}
      >
        <div className="faq-a-content">
          <div className="faq-a-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}