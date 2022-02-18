import { Meta, Story } from '@storybook/react';
import React from 'react';
import useMedia from '../src/lib/useMedia';

function TestComponent(): JSX.Element {
    const media = useMedia();
    console.log(media);
    return <div>{'Current Media Break Point is ' + media}</div>;
}

const meta: Meta = {
    title: 'Lib Test',
    component: TestComponent,
};

export default meta;

const Template: Story = () => <TestComponent />;

export const Default = Template.bind({});

Default.args = {};
