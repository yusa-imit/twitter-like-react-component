import { CSSProperties } from 'react';
import { availableQueryName } from './queryType';
export type mediaStyle = {
    [key in availableQueryName]? : CSSProperties
}