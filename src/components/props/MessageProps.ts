import { availableQueryName, mediaStyle } from '../../lib';
import { DefaultAvatarProps } from './DefaultAvatarProps';

export interface MessageProps extends React.HTMLAttributes<HTMLElement> {
    media: availableQueryName;
    messageHref: string;
    header: {
        name: string;
        idString: string;
        datetime: string;
        idHref: string;
        options?: {
            wrapperStyle?: mediaStyle;
            nameStyle?: mediaStyle;
            idStyle?: mediaStyle;
        };
    };
    avatarProps?: DefaultAvatarProps;
}
