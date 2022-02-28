import { CSSProperties } from 'react';
import { mergeCSS } from './mergeWithNew';

export const eventStyleSynthesis = (
    eventInBoolean: Boolean,
    defaultStyle: CSSProperties,
    eventStyle: CSSProperties
): CSSProperties => {
    return eventInBoolean ? mergeCSS(defaultStyle, eventStyle) : defaultStyle;
};
