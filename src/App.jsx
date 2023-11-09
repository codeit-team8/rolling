import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import Nav from '@/components/Nav/Nav.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<Main />} />
        <Route path="/post" element={<Post />}>
          <Route path=":postId" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
