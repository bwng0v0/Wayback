import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sign from './Pages/sign';
import Login from './Pages/login';
import Home from './Pages/Home';
import TextEditor from './Pages/TextEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path='/textedit' element={<TextEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
