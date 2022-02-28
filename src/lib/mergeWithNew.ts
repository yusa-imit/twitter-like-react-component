import { mediaStyle } from './type/mediaStyle';
import { availableQueryName } from './type/queryType';
export const mergeWithNew = (
    target: mediaStyle,
    source: mediaStyle | undefined
): mediaStyle => {
    if (!source) return target;
    const newStyle: mediaStyle = {};
    const availableKeys: Array<availableQueryName> = [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
    ];
    for (const key of availableKeys) {
        if (target[key] === undefined) {
            if (source[key] === undefined) continue;
            newStyle[key] = source[key];
        } else {
            // @ts-ignore
            newStyle[key] = mergeCSS(target[key], source[key]);
        }
    }
    console.log(newStyle);
    return newStyle;
};

const mergeCSS = (target: Object, source: Object | undefined): Object => {
    if (!source) return target;
    const newCSS: Object = {};
    for (const key of Object.keys(target)) {
        //@ts-ignore
        if (target[key] === undefined) {
            //@ts-ignore
            if (source[key] === undefined) continue;
            //@ts-ignore
            newCSS[key] = source[key];
        } else {
            // @ts-ignore
            if (source[key] === undefined) newCSS[key] = target[key];
            // @ts-ignore
            else newCSS[key] = source[key];
        }
    }
    return newCSS;
};
