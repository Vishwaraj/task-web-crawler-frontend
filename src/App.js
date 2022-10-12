
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './components/List/List';
import Login from './components/LoginPage/Login';

export const store = createContext();
function App() {

  const [list, setList] = useState(null);

  return (
<>
 <store.Provider value={{list, setList}} >
 <Routes>
  <Route path='/' element={<Login />}  />
  <Route path='/connections' element={<List/>}  />

 </Routes>
 
 
 </store.Provider>

</>
  );
}

export default App;
