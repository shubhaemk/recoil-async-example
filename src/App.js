import React from 'react';
import DetailsWithoutSuspense from './components/details/detailsWithoutSuspense';
import DetailsWithSuspense from './components/details/detailsWithSuspense';

function App() {
  return (
    <div className="App">
      <div style={{ border: '1px solid #000', padding: '20px', marginBottom: '10px'}}>
        <p>Details without Suspense</p>
        <br/>
        <DetailsWithoutSuspense />
      </div>
      <div style={{ border: '1px solid #000', padding: '20px' }}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <p>Details with Suspense</p>
          <br />
          <DetailsWithSuspense/>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
