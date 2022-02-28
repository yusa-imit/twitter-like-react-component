import { mergeWithNew } from './mergeWithNew';
import { mediaStyle } from './type/mediaStyle';

export const mediaStyleSynthesis = (
    origin: mediaStyle,
    synthesis: mediaStyle | undefined,
    option?: boolean,
): mediaStyle => {
    if (option && synthesis !== undefined) return synthesis;
    else return mergeWithNew(origin, synthesis);
};
