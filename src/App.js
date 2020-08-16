import React from 'react';

import Button from './components/Button';

function App() {
    return (
        <div className="App">
            <h1>
                Styled Collection
                <small>&lt; v.0.1.2 &gt;</small>
            </h1>

            <Button click={() => alert('Clicked')}>My Button</Button>
        </div>
    );
}

export default App;
