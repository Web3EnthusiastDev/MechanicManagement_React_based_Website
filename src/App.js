import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarSidebar from './components/NavbarSidebar';
import Footer from './components/Footer';
import routes from './routes';

const App = () => {
  return (
    <Router>
      <div>
        <NavbarSidebar />
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
