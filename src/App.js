import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import UserPage from './components/UserPage/UserPage';
import CreatePost from './components/PostCreation/PostCreation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route exact path="/me" Component={UserPage} />
        <Route exact path="/newpost" Component={CreatePost} />
        {/* <Route exact path="/foodlist/:id" Component={FoodCard} />
        <Route exact path="/cart" Component={FoodCart} /> */}
        <Route path="*" element={<Navigate from="*" to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
