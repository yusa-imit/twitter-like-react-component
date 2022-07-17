import { Story } from '@storybook/react';
import React from 'react';
import Id from '../src/components/Id';
import useMedia from '../src/lib/useMedia';
const meta = {
    title: 'Id',
    component: Id,
    argTypes: {},
};
export default meta;

const Template = (args) => {
    const media = useMedia();
    return (
        <Id
            media={media}
            direction={'horizontal'}
            name={'Test'}
            idString={'@test_id'}
            href={''}
        />
    );
};

export const IdComp = Template.bind({});
