import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Nav from '@/components/Nav/Nav.jsx';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
