export default function PremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Premium content:</h2>
      {children}
    </div>
  );
}
