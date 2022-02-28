import { CSSProperties } from 'react';

export const eventStyleSynthesis = (
    eventInBoolean: Boolean,
    defaultStyle: CSSProperties,
    eventStyle: CSSProperties
): CSSProperties => {
    return eventInBoolean ? Object.assign(defaultStyle, eventStyle) : defaultStyle;
};
