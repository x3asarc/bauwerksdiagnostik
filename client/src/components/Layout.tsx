import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', background: '#FDFDFD' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '280px', width: 'calc(100% - 280px)' }} className="lg:ml-0 lg:w-full">
        <div style={{ paddingTop: '128px', paddingBottom: '160px' }} className="md:pt-20">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
