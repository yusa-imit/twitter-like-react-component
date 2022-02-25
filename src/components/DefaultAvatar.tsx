import React, { useState } from 'react';
import { getStyle } from '../lib/getStyle';
import { DefaultAvatarProps } from './props/DefaultAvatarProps';
import {
    DefaultAvatarStyle,
    HoveredDefaultAvatarStyle,
} from './styles/DefaultAvatarStyle';



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
                hover
                    ? Object.assign(
                          getStyle(media, styles ? styles : DefaultAvatarStyle),
                          getStyle(
                              media,
                              options.hoveredStyle
                                  ? options.hoveredStyle
                                  : HoveredDefaultAvatarStyle
                          )
                      )
                    : getStyle(media, styles ? styles : DefaultAvatarStyle)
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
