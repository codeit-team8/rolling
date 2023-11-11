import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import Nav from '@/components/Nav/Nav.jsx';
import From from '@/pages/From.jsx';
import PaperList from '@/pages/PaperList.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<PaperList />} />
        <Route path="/post" element={<Post />}>
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="/from" element={<From />} />
      </Routes>
    </div>
  );
}

export default App;
