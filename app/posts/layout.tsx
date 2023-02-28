export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Reading corner:</h2>
      {children}
    </div>
  );
}
