import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Nav from '@/components/Nav/Nav.jsx';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import RollingPaperList from '@/pages/RollingPaperList.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<RollingPaperList paperCardList={[1, 2, 3, 4, 5]} />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
