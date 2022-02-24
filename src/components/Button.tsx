import React from 'react';
import { getStyle } from '../lib/getStyle';
import { mediaStyle } from '../lib/type/mediaStyle';
import { availableQueryName } from '../lib/type/queryType';
import { ButtonStyle, IconStyle, TextStyle } from './styles/ButtonStyle';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element | JSX.IntrinsicElements | SVGElement;
    text?: string;
    media: availableQueryName;
    styles?: {
        buttonStyle?: mediaStyle;
        iconStyle?: mediaStyle;
        textStyle?: mediaStyle;
    };
    options?: {};
}

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
