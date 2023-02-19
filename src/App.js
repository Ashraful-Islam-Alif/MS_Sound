
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='text-black'>
      <Routes >
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
