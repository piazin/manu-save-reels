import { Footer } from "@/components/interface/Footer";
import { Header } from "@/components/interface/Header";
import { SearchSection } from "@/components/interface/SearchSection";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-slate-50 dark:bg-zinc-950 flex items-center justify-center p-8">
        <SearchSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
