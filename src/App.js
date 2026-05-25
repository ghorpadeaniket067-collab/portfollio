import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import PrivacyPolicy from './components/PrivacyPolicy';
import AccessibilityStatement from './components/AccessibilityStatement';

function HomePage() {

  // States

  const [showProjects, setShowProjects] =
    useState(false);

  const [showContact, setShowContact] =
    useState(false);

  return (

    <>
      {/* Navbar */}

      <Navbar
        setShowProjects={setShowProjects}
        setShowContact={setShowContact}
      />

      {/* Show Home Sections ONLY */}

      {
        !showProjects && !showContact && (

          <>
            <Hero />
            <About />
          </>

        )
      }

      {/* Show Projects ONLY */}

      {
        showProjects && <Projects />
      }

      {/* Show Contact ONLY */}

      {
        showContact && <Contact />
      }

      {/* Footer */}

      <Footer />
    </>

  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={<HomePage />}
        />

        <Route
          path='/privacy-policy'
          element={<PrivacyPolicy />}
        />

        <Route
          path='/accessibility-statement'
          element={<AccessibilityStatement />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;