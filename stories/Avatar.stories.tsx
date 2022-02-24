import { Meta, Story } from '@storybook/react';
import React from 'react';
import DefaultAvatar from '../src/components/DefaultAvatar';
import test1 from './images/test1.jpg';
import test2 from './images/test2.jpg';
import useMedia from '../src/lib/useMedia';

const DefaultAvatarTestComponent = () => {
    const media = useMedia();
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                rowGap: '20px',
                columnGap: '20px',
            }}
        >
            <div style={{ width: '20%', height: '100%' }}>
                <DefaultAvatar media={media} src={test1} />
            </div>
            <div style={{ width: '20%', height: '100%' }}>
                <DefaultAvatar
                    media={media}
                    src={test2}
                    options={{ hoverAction: false }}
                />
            </div>
        </div>
    );
};

const meta: Meta = {
    title: 'Avatars',
    component: DefaultAvatarTestComponent,
    argTypes: {},
};

export default meta;

const Template: Story<any> = (args) => <DefaultAvatarTestComponent {...args} />;

export const Default = Template.bind({});

Default.args = {};
