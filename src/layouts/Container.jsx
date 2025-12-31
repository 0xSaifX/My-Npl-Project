export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
export default function Section({ children, className = "" }) {
  return (
    <section className={`py-16 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}
