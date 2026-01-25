import { Footer } from "@/components/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Homepage has its own dynamic nav - don't include shared Nav here
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
