import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import Nav from '@/components/Nav/Nav.jsx';
import From from '@/pages/From.jsx';
import PaperList from '@/pages/PaperList.jsx';
import To from '@/pages/To.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<PaperList />} />
        <Route path="/post">
          <Route index element={<To />} />
          <Route path=":postId" element={<Post />} />
          <Route path=":postId/message" element={<From />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
