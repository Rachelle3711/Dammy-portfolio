export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs tracking-wide text-neutral-500 mb-4">{children}</p>
  );
}
