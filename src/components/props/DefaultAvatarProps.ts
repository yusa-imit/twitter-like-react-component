import { CSSProperties } from 'react';
import { mediaStyle } from '../../lib/type/mediaStyle';
import { availableQueryName } from '../../lib/type/queryType';

export interface DefaultAvatarProps
    extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    media: availableQueryName;
    styles?: mediaStyle;
    options?: {
        hoverAction?: boolean;
        hoveredStyle?: mediaStyle;
        innerImageStyle?: CSSProperties;
    };
}
