import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] lg:flex">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-x-hidden pt-24 pb-32 lg:pl-[280px] lg:pt-0">
        <div className="px-4 pt-20 sm:px-6 md:px-8 md:pt-24 lg:px-0 lg:pt-32 lg:pb-40">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
