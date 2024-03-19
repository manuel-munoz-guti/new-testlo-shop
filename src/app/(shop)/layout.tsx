import { Footer, TopMenu } from "@/components";
import { Sidebar } from "@/components/ui/sidebar/Sidebar";

export default function ShopLayout({ children }: { children: React.ReactNode; }) {
  return (
    <main className="min-h-screen px-5">
        <TopMenu />
        <Sidebar />
        <div className="px-0 sm:px-10">
        { children }
        </div>
      <Footer />
    </main>
  );
}