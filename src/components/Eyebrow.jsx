export default function Eyebrow({ children, center = false }) {
  return (
    <div className="eyebrow" style={center ? { justifyContent: 'center' } : undefined}>
      {children}
    </div>
  );
}
