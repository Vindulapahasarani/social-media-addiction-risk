import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PredictionForm from './components/PredictionForm';
import Results from './components/Results';

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<PredictionForm onResult={setResult} />} />
        <Route path="/results" element={<Results result={result} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
