import React from 'react';
import { availableQueryName, mediaStyle, mediaStyleSynthesis } from '../lib';
import Button from './Button';
import { TextButtonIconStyle, TextButtonStyle } from './styles/TextButtonStyle';

interface TextButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string;
    media: availableQueryName;
    styles?: {
        buttonStyle?: mediaStyle;
        textStyle?: mediaStyle;
    };
    options?: {
        renewStyle?: boolean;
        neverShrink?: boolean;
    };
}

export default function TextButton({
    text,
    media,
    styles,
    ...others
}: TextButtonProps): JSX.Element {
    return (
        <Button
            media={media}
            text={text}
            styles={{
                buttonStyle: mediaStyleSynthesis(TextButtonStyle, styles?.buttonStyle),
                iconStyle: TextButtonIconStyle,
                textStyle: styles?.textStyle,
            }}
            {...others}
        />
    );
}
