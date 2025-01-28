import React from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero-section text-center p-10 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4">Showcasing my work and skills</p>
      </header>
      <main className="projects-section p-10">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="project-card p-4 bg-white shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-sm text-gray-600">A brief description of the project.</p>
          </div>
          <div className="project-card p-4 bg-white shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-sm text-gray-600">A brief description of the project.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
