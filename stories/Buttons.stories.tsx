import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, getColor, IconButton, useMedia } from '../src';
import ICON from './images/test3.svg';
import TextButton from '../src/components/TextButton';
import { getAllColors } from '../src/lib/getAllColors';

const meta: Meta = {
    title: 'Buttons',
};

export default meta;

const TemplateDefaultButton: Story<any> = (args) => {
    const media = useMedia();
    const colors = getColor();
    const allColors = getAllColors();
    return (
        <Button
            media={media}
            text="BUTTON"
            icon={ICON}
            options={{ neverShrink: true }}
            styles={{
                buttonStyle: {
                    xs: {
                        color: colors.textColor,
                        backgroundColor: colors.backgroundColor,
                    },
                },
            }}
        />
    );
};
export const Default_Button = TemplateDefaultButton.bind({});

const TemplateIconButton: Story<any> = (args) => {
    const media = useMedia();
    const colors = getColor();
    return (
        <IconButton
            media={media}
            icon={ICON}
            styles={{
                buttonStyle: {
                    xs: {
                        backgroundColor: colors.backgroundColor,
                    },
                },
            }}
        />
    );
};

export const Icon_Button = TemplateIconButton.bind({});

const TemplateTextButton: Story<any> = (args) => {
    const media = useMedia();
    const colors = getColor();
    return (
        <TextButton
            media={media}
            text={'Button'}
            styles={{
                buttonStyle: {
                    xs: {
                        backgroundColor: colors.primaryColor,
                        color: '#fff',
                    },
                },
            }}
        />
    );
};

export const Text_Button = TemplateTextButton.bind({});
