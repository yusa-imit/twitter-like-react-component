import { CSSProperties } from 'react';
import { mediaStyle } from './type/mediaStyle';
import { queryNamePriority } from './queryNamePriority';
import { availableQueryName } from './type/queryType';

export function getStyle(
    current: availableQueryName,
    styleWithMedia: mediaStyle
): CSSProperties {
    const returnStyle: CSSProperties = initialStyle(styleWithMedia);
    if (returnStyle === {})
        throw new TypeError(
            'Custom style object need at least one of available query name style object with at least one CSS property, not an empty object. If you want to use default style, do not add style object to library component'
        );
    for (const key of Object.keys(styleWithMedia)) {
        if (queryNameCompare(current, key as keyof typeof styleWithMedia))
            break;
        Object.assign(
            returnStyle,
            styleWithMedia[key as keyof typeof styleWithMedia]
        );
    }
    return returnStyle;
}

function queryNameCompare(
    current: availableQueryName,
    compare: availableQueryName
): boolean {
    if (queryNamePriority[current] > queryNamePriority[compare]) {
        return true;
    } else {
        return false;
    }
}

function initialStyle(styleWithMedia: mediaStyle): CSSProperties {
    return Object.assign(
        {},
        styleWithMedia[
            Object.keys(styleWithMedia)[0] as keyof typeof styleWithMedia
        ]
    );
}
