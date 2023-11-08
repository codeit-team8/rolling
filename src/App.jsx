<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Nav from '@/components/Nav/Nav.jsx';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
=======
import SelectBox from './components/selectBox.jsx';
import GlobalStyle from './styles/GlobalStyle.js';
>>>>>>> e91573370556477179ca1821b21b9c485f605ba1

function App() {
  return (
    <div>
      <GlobalStyle />
<<<<<<< HEAD
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
      </Routes>
=======
      <SelectBox />
>>>>>>> e91573370556477179ca1821b21b9c485f605ba1
    </div>
  );
}

export default App;
