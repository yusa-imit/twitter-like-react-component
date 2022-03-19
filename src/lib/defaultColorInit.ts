import { CSSProperties } from 'react';
import { getColor } from './theme';
import { ColorObject } from './type/theme';

export function defaultColorInit(
    cssObject: CSSProperties,
    applyColor: Array<keyof ColorObject>,
    options?: number
) {
    if (
        cssObject.color !== undefined &&
        cssObject.backgroundColor !== undefined
    ) {
        return cssObject;
    } else {
        const themeColor = getColor(
            cssObject.backgroundColor,
            cssObject.color,
            cssObject.color,
            cssObject.backgroundColor,
            options
        );
        for (const applier of applyColor) {
            switch (applier) {
                case 'primaryColor':
                case 'backgroundColor':
                    cssObject.backgroundColor = themeColor[applier];
                    break;
                case 'subTextColor':
                case 'textColor':
                    cssObject.color = themeColor[applier];
                    break;
                default:
                    break;
            }
        }
        return cssObject;
    }
}
