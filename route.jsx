import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './src/Components/Todo';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
