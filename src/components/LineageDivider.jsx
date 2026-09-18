// Signature element — a thin branching brass line, echoing the pedigree
// charts and the tree motif in the crest. Used as a section divider.
export default function LineageDivider() {
  return (
    <svg className="lineage" viewBox="0 0 1000 48" preserveAspectRatio="none">
      <path d="M0 24 H420 C 450 24,450 8,480 8 H520 C 550 8,550 24,580 24 H1000" />
      <circle cx="500" cy="16" r="4" />
    </svg>
  );
}
