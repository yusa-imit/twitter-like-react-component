import { mediaStyle } from '../../lib/type/mediaStyle';
export const MessageArticleStyle: mediaStyle = {
    xs: {
        display: 'grid',
        gridTemplateColumns: '50px auto',
        gridColumnGap: '10px',
        gridTemplateAreas: 'profile user profile content profile actions',
        padding: '10px 15px',
    },
};

export const MessageHeaderStyle: mediaStyle = {
    xs: {
        display: 'flex',
    },
};
