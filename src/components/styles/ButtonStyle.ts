import { mediaStyle } from '../../lib/type/mediaStyle';

export const ButtonStyle: mediaStyle = {
    xs: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        borderRadius: '20px/50%',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
};

export const IconStyle: mediaStyle = {
    xs: {
        width: '26px',
        height: '26px',
        lineHeight: '26px',
        textAlign: 'center',
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
