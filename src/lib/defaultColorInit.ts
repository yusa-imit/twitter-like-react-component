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
        applyColor.forEach((v) => {
            switch (v) {
                case 'backgroundColor' || 'primaryColor':
                    cssObject.backgroundColor = themeColor[v];
                    break;
                case 'subTextColor' || 'textColor':
                    cssObject.color = themeColor[v];
                    break;
                default:
                    break;
            }
        });

        return cssObject;
    }
}
