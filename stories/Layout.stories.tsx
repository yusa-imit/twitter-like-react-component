import { Meta, Story } from '@storybook/react';
import React from 'react';
import Layout from '../src/components/Layout';
import { LayoutProps } from '../src/components/props/LayoutProps';

const meta: Meta = {
    title: 'Layout',
    component: Layout,
    argTypes: {
        mainStyle: {},
    },
};

export default meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args}/>;

export const Default = Template.bind({});

Default.args = {};
