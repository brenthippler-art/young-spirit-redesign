export const TESTIMONIALS = [
  {
    quote:
      "Our dog needed special attention with his separation anxiety and they were kind, gentle and patient with him. He came home a very happy and well exercised dog. You can trust their care is at a personal level.",
    who: "Deborah L.",
    rating: "5",
    category: 'boarding',
  },
  {
    quote: 'Our dog Clyde needed to be boarded while we were on vacation by someone with the skill and patience required for a large, energetic puppy. Young Spirit made sure he had all the love, attention and exercise he could get. He had the time of his life while we were gone!',
    who: "Brenton H.",
    rating: "5",
    category: 'boarding',
  },
];

export function getTestimonials(category) {
  return TESTIMONIALS.filter((t) => t.category === category);
}