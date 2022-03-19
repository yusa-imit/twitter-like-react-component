import { mediaStyle } from '../../lib/type/mediaStyle';

export const DefaultAvatarStyle: mediaStyle = {
    xs: {
        width: '100%',
        aspectRatio: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '9999px',
        overflow: 'hidden',
    },
};

export const HoveredDefaultAvatarStyle: mediaStyle = {
    xs: {
        filter: 'brightness(70%)',
    },
};
