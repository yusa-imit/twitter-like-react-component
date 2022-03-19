import React from 'react';
import { getStyle } from '../lib/getStyle';
import { ButtonProps } from './props/ButtonProps';
import { ButtonStyle, IconStyle, TextStyle } from './styles/ButtonStyle';
import { mediaStyleSynthesis } from '../lib/mediaStyleSynthesis';
import { mergeWithNew } from '../lib/mergeWithNew';
import { defaultColorInit } from '../lib/defaultColorInit';

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
            style={defaultColorInit(
                getStyle(
                    media,
                    mediaStyleSynthesis(
                        ButtonStyle,
                        styles?.buttonStyle,
                        options?.renewStyle
                    )
                ),
                ['backgroundColor', 'textColor']
            )}
        >
            <img
                src={icon}
                alt={'tlrc_button_component_icon'}
                style={getStyle(
                    media,
                    mediaStyleSynthesis(
                        IconStyle,
                        styles?.iconStyle,
                        options?.renewStyle
                    )
                )}
            />
            <span
                style={getStyle(
                    media,
                    mediaStyleSynthesis(
                        options?.neverShrink
                            ? mergeWithNew(TextStyle, {
                                  xs: { display: 'block' },
                              })
                            : TextStyle,
                        styles?.textStyle,
                        options?.renewStyle
                    )
                )}
            >
                {text}
            </span>
        </button>
    );
}
