import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import Nav from '@/components/Nav/Nav.jsx';
import From from '@/pages/From.jsx';
import PaperList from '@/pages/PaperList.jsx';
import To from '@/pages/To.jsx';
import Edit from '@/pages/Edit';
import ErrorFallback from './Error/ErrorFallback';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<PaperList />} />
          <Route path="/post">
            <Route index element={<To />} />
            <Route path=":recipientId" element={<Post />} />
            <Route path=":recipientId/message" element={<From />} />
            <Route path=":recipientId/edit" element={<Edit />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
