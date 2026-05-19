import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-8 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
