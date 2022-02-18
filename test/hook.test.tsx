import React from 'react';
import * as ReactDOM from 'react-dom';
import useMedia from '../src/lib/useMedia';

function TestComponent(props): JSX.Element {
    const media = useMedia();
    return <div>{'Current Media Break Point is ' + media}</div>;
}

describe('useMedia Hook', () => {
    it('Hook Test without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TestComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
