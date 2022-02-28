import { mediaStyle } from '../../lib/type/mediaStyle';
import { availableQueryName } from '../../lib/type/queryType';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: string;
    text?: string;
    media: availableQueryName;
    styles?: {
        buttonStyle?: mediaStyle;
        iconStyle?: mediaStyle;
        textStyle?: mediaStyle;
    };
    options?: {
        renewStyle?: boolean;
        neverShrink?: boolean;
    };
}
