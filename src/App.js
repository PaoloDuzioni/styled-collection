import React from 'react';
import Button from './components/Button';

function App({ theme }) {
    // Access global theme passed as a prop in index.js
    console.log(theme);

    return (
        <>
            <h1>
                Styled Collection &nbsp;
                <small>&lt; Version 0.1.8 &gt;</small>
            </h1>
            <h2>Button</h2>
            <Button>Default Button</Button>
            &nbsp;
            <Button
                textCol={theme.typography.backColor}
                bgCol={theme.colors.primary}
                onClick={() => alert('Clicked')}
            >
                Primary Button
            </Button>
            &nbsp;
            <Button
                textCol={theme.typography.backColor}
                bgCol={theme.colors.secondary}
                onClick={() => alert('Clicked')}
            >
                Secondary Button
            </Button>
        </>
    );
}

export default App;
