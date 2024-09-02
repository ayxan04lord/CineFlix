import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hollywood from "./pages/hollywood/Hollywood";
import Korean from "./pages/korean/Korean";
import Chinese from "./pages/chinese/Chinese";
import Japanese from "./pages/japanese/Japanese";
import Turkish from "./pages/turkish/Turkish";
import Main from './pages/main/Main';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="hollywood" element={<Hollywood />} />
            <Route path="korean" element={<Korean />} />
            <Route path="chinese" element={<Chinese />} />
            <Route path="japanese" element={<Japanese />} />
            <Route path="turkish" element={<Turkish />} />
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
