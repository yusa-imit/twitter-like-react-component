import React from 'react';
import { getStyle } from '../lib/getStyle';
import { ButtonProps } from './props/ButtonProps';
import { ButtonStyle, IconStyle, TextStyle } from './styles/ButtonStyle';


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
                styles?.buttonStyle ? styles.buttonStyle : ButtonStyle
            )}
        >
            <span
                style={getStyle(
                    media,
                    styles?.iconStyle ? styles.iconStyle : IconStyle
                )}
            >
                {icon}
            </span>
            <span
                style={getStyle(
                    media,
                    styles?.textStyle ? styles.textStyle : TextStyle
                )}
            >
                {text}
            </span>
        </button>
    );
}
