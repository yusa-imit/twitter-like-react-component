import React, { useState } from 'react';
import { eventStyleSelector } from '../lib/eventStyleSelector';
import { getStyle } from '../lib/getStyle';
import { DefaultAvatarProps } from './props/DefaultAvatarProps';
import { mediaStyleSynthesis } from '../lib/mediaStyleSynthesis';
import {
    DefaultAvatarStyle,
    HoveredDefaultAvatarStyle,
} from './styles/DefaultAvatarStyle';
import { defaultColorInit } from '../lib/defaultColorInit';

export default function DefaultAvatar({
    src,
    alt,
    media,
    styles,
    options = {
        hoverAction: true,
    },
    ...others
}: DefaultAvatarProps): JSX.Element {
    const [hover, setHover] = useState<Boolean>(false);
    return (
        <div
            {...others}
            style={
                defaultColorInit(
                    eventStyleSelector(
                        hover,
                        getStyle(
                            media,
                            mediaStyleSynthesis(
                                DefaultAvatarStyle,
                                styles,
                                options.renewStyle
                            )
                        ),
                        getStyle(
                            media,
                            mediaStyleSynthesis(
                                HoveredDefaultAvatarStyle,
                                options.hoveredStyle,
                                options.renewStyle
                            )
                        )
                    ),
                    ['backgroundColor', 'textColor']
                )

                /*hover
                    ? Object.assign(
                          getStyle(media, styles ? styles : DefaultAvatarStyle),
                          getStyle(
                              media,
                              options.hoveredStyle
                                  ? options.hoveredStyle
                                  : HoveredDefaultAvatarStyle
                          )
                      )
                    : getStyle(media, styles ? styles : DefaultAvatarStyle)*/
            }
            onMouseEnter={() => {
                setHover(options.hoverAction ? true : false);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            <img
                src={src}
                alt={alt}
                style={
                    options.innerImageStyle
                        ? options.innerImageStyle
                        : { width: 'auto', height: 'auto' }
                }
            />
        </div>
    );
}
