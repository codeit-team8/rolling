import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalStyle from '@/styles/GlobalStyle.js';
import Post from '@/pages/Post.jsx';
import Main from '@/pages/Main.jsx';
import Nav from '@/components/Nav/Nav.jsx';
import To from '@/pages/To.jsx';
import FromPage from './pages/FromPage';
import ErrorFallback from './Error/ErrorFallback';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<Main />} />
          <Route path="/post">
            <Route index element={<To />} />
            <Route path=":postId" element={<Post />} />
            <Route path=":postId/message" element={<FromPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
