import React from 'react';
import Button from './components/Button';

function App() {
    return (
        <>
            <h1>
                Styled Collection &nbsp;
                <small>&lt; Version 0.1.3 &gt;</small>
            </h1>

            <Button onClick={() => alert('Clicked')}>My Button</Button>
        </>
    );
}

export default App;
