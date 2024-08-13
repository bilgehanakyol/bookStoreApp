import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/HomeBooks';
import CreateBooks from './pages/CreateBooks';
import DeleteBooks from './pages/DeleteBooks';
import EditBooks from './pages/EditBooks';
import ShowBooks from './pages/ShowBooks';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/show' element={<ShowBooks/>} />
      <Route path='/books/edit' element={<EditBooks/>} />
      <Route path='/books/delete' element={<DeleteBooks/>} />
    </Routes>
  )
}
export default App;