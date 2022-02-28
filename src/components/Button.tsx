import React from 'react';
import { getStyle } from '../lib/getStyle';
import { ButtonProps } from './props/ButtonProps';
import { ButtonStyle, IconStyle, TextStyle } from './styles/ButtonStyle';
import { mediaStyleSynthesis } from '../lib/mediaStyleSynthesis';

export default function Button({
    icon,
    text,
    media,
    styles,
    options,
    ...others
}: ButtonProps): JSX.Element {
    return (
        <button
            {...others}
            style={getStyle(
                media,
                mediaStyleSynthesis(ButtonStyle, styles?.buttonStyle, options?.renewStyle)
            )}
        >
            <img
                src={icon}
                alt={"tlrc_button_component_icon"}
                style={getStyle(
                    media,
                    mediaStyleSynthesis(IconStyle, styles?.iconStyle, options?.renewStyle)
                )}
                />
            <span
                style={getStyle(
                    media,
                    mediaStyleSynthesis(TextStyle, styles?.textStyle, options?.renewStyle)
                )}
            >
                {text}
            </span>
        </button>
    );
}
