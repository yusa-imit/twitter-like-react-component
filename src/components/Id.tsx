import React from 'react';
import { availableQueryName, getStyle, mediaStyleSynthesis } from '../lib';
import { mediaStyle } from '../lib/type/mediaStyle';
import { defaultIdStyle, defaultNameStyle } from './styles/IdStyle';

type Direction = 'horizontal' | 'vertical';
interface IdProps {
    media: availableQueryName;
    direction: Direction;
    name: string;
    idString: string;
    href: string;
    options?: {
        wrapperStyle?: mediaStyle;
        nameStyle?: mediaStyle;
        idStyle?: mediaStyle;
    };
}
export default function Id({
    media,
    href,
    name,
    idString,
    direction = 'horizontal',
    options,
}: IdProps): JSX.Element {
    return (
        <a href={href} style={{ zIndex: 1 }}>
            <div
                style={getStyle(
                    media,
                    mediaStyleSynthesis(
                        {
                            xs: {
                                display: 'flex',
                                flexDirection:
                                    direction === 'horizontal'
                                        ? 'row'
                                        : 'column',
                            },
                        },
                        options?.wrapperStyle
                    )
                )}
            >
                <span
                    style={getStyle(
                        media,
                        mediaStyleSynthesis(defaultNameStyle, options?.idStyle)
                    )}
                >
                    {name}
                </span>
                <span
                    style={getStyle(
                        media,
                        mediaStyleSynthesis(defaultIdStyle, options?.idStyle)
                    )}
                >
                    {idString}
                </span>
            </div>
        </a>
    );
}
