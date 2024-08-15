export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <div className="max-w-[500px] mx-auto px-3 pt-12">{children}</div>
    </div>
  );
}
