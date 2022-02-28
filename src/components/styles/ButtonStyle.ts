import { mediaStyle } from '../../lib/type/mediaStyle';

export const ButtonStyle: mediaStyle = {
    xs: {
        padding: '7px 0',
    },
};

export const IconStyle: mediaStyle = {
    xs: {
        width: '26px',
        height: '26px',
        lineHeight: '26px',
        textAlign: 'center',
        filter: 'grayscale(1) opacity(0.8)',
        transition: '0.2s',
    },
};

export const TextStyle: mediaStyle = {
    xs: {
        display: 'none',
        paddingRight: '15px',
        marginLeft: '20px',
    },
    sm: {
        display: 'block',
    },
};
