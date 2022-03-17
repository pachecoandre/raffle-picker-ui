import { Routes, Route } from 'react-router-dom';
import './../styles/App.css';

function AppRouter() {
  return (
    <div className="App">
      <h1>Sorteio de Rifa</h1>
      <Routes>
        <Route path={'/'} element={<div>Home</div>} />
        <Route path={'about'} element={<div>About</div>} />
      </Routes>
    </div>
  );
}

export default AppRouter;
