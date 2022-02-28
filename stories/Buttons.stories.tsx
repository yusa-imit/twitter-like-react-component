import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, IconButton, useMedia } from '../src';
import ICON from "./images/test3.svg"
import TextButton from '../src/components/TextButton';

const meta: Meta = {
    title: "Buttons",
}

export default meta;

const TemplateDefaultButton: Story<any> = (args) => {
    const media = useMedia();
    console.log(ICON)
    return(
        <Button media={media} text="BUTTON" icon={ICON} options={{neverShrink: true}}/>
    )
};
export const Default_Button = TemplateDefaultButton.bind({});

const TemplateIconButton: Story<any> = (args) => {
    const media = useMedia();
    return(
        <IconButton media={media} icon={ICON}/>
    )
}

export const Icon_Button = TemplateIconButton.bind({});

const TemplateTextButton: Story<any> = (args) => {
    const media = useMedia();
    return(
        <TextButton media={media} text={"Button"}/>
    )
}

export const Text_Button = TemplateTextButton.bind({});