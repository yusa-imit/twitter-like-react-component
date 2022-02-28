import { mediaStyle } from './type/mediaStyle';
import { availableQueryName } from './type/queryType';
import { CSSProperties } from 'react';
export const mergeWithNew = (target: mediaStyle, source: mediaStyle | undefined): mediaStyle => {
    if (!source) return target;
    const newStyle: mediaStyle = {};
    const availableKeys: Array<availableQueryName> = ["xs", "sm", "md", "lg", "xl"];
    for(const key of availableKeys){
        if(target[key] === undefined){
            if(source[key] === undefined) continue;
            newStyle[key] = source[key];
        }
        else{
            newStyle[key] = Object.assign(target[key] as CSSProperties, source[key] as CSSProperties | undefined);
        }
    }
    console.log(newStyle);
    return newStyle;
}

const mergeCSS = (target: CSSProperties, source: CSSProperties | undefined): CSSProperties => {
    if(!source) return target;
    const newCSS: CSSProperties = {};
    for(const key of Object.keys(target) as Array<keyof CSSProperties>){
        if(target[key] === undefined){
            if(source[key] === undefined) continue;
            newCSS[key] = source[key];
        }
    }
    return newCSS;
}