// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome to DerpGame</h2>
        <p className="text-lg">This is the landing page for DerpGame. Stay tuned for more updates!</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
