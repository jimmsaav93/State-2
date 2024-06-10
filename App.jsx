import React from 'react';
import Counter from './components/Counter';

const App = () => {
    return (
        <div>
            <h1>Counter App</h1>
            <Counter initialCount={0} decrementAmount={1} />
        </div>
    );
}

export default App;