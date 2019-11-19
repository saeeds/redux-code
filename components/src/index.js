import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
    return (
        <div>
            Welcome to react
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);