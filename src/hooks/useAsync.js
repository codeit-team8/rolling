import { useCallback, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const { showBoundary } = useErrorBoundary();

  const wrappedFunction = useCallback(
    async (...args) => {
      setPending(true);
      setError(null);
      try {
        return await asyncFunction(...args);
      } catch (error) {
        setError(error);
        showBoundary(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction, showBoundary],
  );

  return [pending, error, wrappedFunction];
}

export default useAsync;
