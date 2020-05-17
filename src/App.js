import React from 'react';
import DetailsWithAtom from './components/details/detailsWithAtom';
import DetailsWithParameter from './components/details/detailsWithParameter';

function App() {
  return (
    <div className="App">
      <div style={{ border: '1px solid #000', padding: '20px', marginBottom: '10px'}}>
        <p>Details with Atom</p>
        <br/>
        <DetailsWithAtom />
      </div>
      <div style={{ border: '1px solid #000', padding: '20px' }}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <p>Details with Parameter</p>
          <br />
          <DetailsWithParameter />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
