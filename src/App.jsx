import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Nav from '@/components/Nav/Nav.jsx';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import RollingPaperList from '@/pages/RollingPaperList.jsx';
import FromPage from '@/pages/FromPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<RollingPaperList />} />
        <Route path="/post" element={<Post />} />
        <Route path="/from" element={<FromPage />} />
      </Routes>
    </div>
  );
}

export default App;
