import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component.js';
import ExercisesList from './components/exercisesList.component';
import CreateExercise from './components/createExercise.component';
import CreateUser from './components/createUser.component';
import EditExercise from './components/editExercise.component';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
