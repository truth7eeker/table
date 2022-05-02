import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Container from './components/table/container/Container.js';

function App() {
  const currPage = useSelector(state => state.page.currPage)

  return (
    <div className="app">
      <Routes>
        <Route path={`table/${currPage}`} exact element={<Container />}/>
        <Route path='*' element={<Navigate to='table/1' replace />} />
      </Routes>
    </div>
  );
}

export default App;
