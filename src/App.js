import logo from './logo.svg';
import './App.css';
import Main from './Component/Main'
import Sidebar from './Component/Sidebar';
import Profile from './Component/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import Layout from './Component/Layout';
import Posts from './Component/Posts';
import Gallery from './Component/Gallery';
import Todo from './Component/Todo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/Home" element={<Layout />} /> */}
        <Route path="/home" element={<Layout />} >
          <Route index element={<Profile />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
