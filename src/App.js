import React from 'react';
import DetailsWithoutSuspense from './components/details/detailsWithoutSuspense';
import DetailsWithSuspense from './components/details/detailsWithSuspense';
import ErrorBoundary from './components/error/errorBoundary';

function App() {
  return (
    <div className="App">
      <div style={{ border: '1px solid #000', padding: '20px', marginBottom: '10px'}}>
        <p>Details without Suspense</p>
        <br/>
        <DetailsWithoutSuspense />
      </div>
      <div style={{ border: '1px solid #000', padding: '20px' }}>
        <p>Details with Suspense</p>
        <br />
        <ErrorBoundary>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DetailsWithSuspense />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
