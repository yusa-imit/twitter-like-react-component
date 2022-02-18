import { CSSProperties } from 'react';
import { mediaStyle } from './type/mediaStyle';
import { queryNamePriority } from './queryNamePriority';
import { availableQueryName } from './type/queryType';

export function getStyle(
    current: availableQueryName,
    styleWithMedia: mediaStyle
): CSSProperties {
    const returnStyle: CSSProperties = {};
    for (const key of Object.keys(styleWithMedia)) {
        if(queryNameCompare(current, key as keyof typeof styleWithMedia)) break;
        Object.assign(returnStyle, styleWithMedia[key as keyof typeof styleWithMedia])
    }
    return returnStyle;
}

function queryNameCompare (current: availableQueryName, compare: availableQueryName) : boolean {
    if(queryNamePriority[current] > queryNamePriority[compare]){
        return true;
    }
    else{
        return false;
    }
}