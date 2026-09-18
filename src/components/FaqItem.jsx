import { useState } from 'react';

export default function FaqItem({ question, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)}>
        {question} <span className="plus">+</span>
      </button>
      <div className="faq-a">
        <div className="faq-a-content">
          <div className="faq-a-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}