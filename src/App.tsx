import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AppsPage } from './pages/AppsPage';
import { AppDetailPage } from './pages/AppDetailPage';
import { DownloadPage } from './pages/DownloadPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { VerifyPage } from './pages/VerifyPage';

function MainContent() {
  const { currentRoute } = useRouter();

  const renderCurrentPage = () => {
    switch (currentRoute.path) {
      case 'home':
        return <HomePage />;
      case 'apps':
        return <AppsPage />;
      case 'app-detail':
        return <AppDetailPage appId={currentRoute.appId} />;
      case 'download':
        return <DownloadPage appId={currentRoute.appId} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'verify':
        return <VerifyPage appId={currentRoute.appId} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-white transition-colors duration-200">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <MainContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
