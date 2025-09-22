import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Insights from '@/pages/Insights';
import Tracker from '@/pages/Tracker';

/**
 * The top‑level component for the BELT tracker application. It defines the
 * navigation bar and the routes for each page. The layout uses a column
 * structure so that the navigation remains at the top and the content
 * stretches to fill the available space.
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-6 flex-1">
        <Routes>
          <Route path="/" element={<Insights />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
