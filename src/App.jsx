import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import Nav from '@/components/Nav/Nav.jsx';
import To from '@/pages/To.jsx';
import FromPage from './pages/FromPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<Main />} />
        <Route path="/post" element={<To />}>
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="/from" element={<FromPage />} />
      </Routes>
    </div>
  );
}

export default App;
