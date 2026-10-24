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
  {
    quote: 'I have reached out to different breeders over the years and never had the experience I had with the folks at Young Spirit. Answered my questions almost immediately and went beyond normal communication by sending photos and videos of the latest additions to their family. Even when I came to the conclusion it wasn’t the right time for us to add to our family they were so kind , so respectful of my decision. So thankful to find Young Spirit! Truly wonderful people!',
    who: "Rebekah J.",
    rating: "5",
    category: 'boarding',
  },
];

export function getTestimonials(category) {
  return TESTIMONIALS.filter((t) => t.category === category);
}