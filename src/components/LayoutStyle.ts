import { mediaStyle } from '../lib/type/mediaStyle';

export const gridStyle: mediaStyle = {
    xs: {
        display: 'grid',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: '0 auto',
        gridTemplateColumns: '1fr',
    },
    sm: {
        gridTemplateColumns: 'auto minmax(auto, 600px)',
        maxWidth: '705px',
    },
    md: {
        gridTemplateColumns: 'auto 600px minmax(290px, 380px)',
        padding: '0 10px',
        boxSizing: 'content-box',
    },
    xl: {
        maxWidth: '1235px',
    },
};
export const mainStyle: mediaStyle = {
    xs: {
        backgroundColor: 'blue',
        border: 'solid 0 #e6ecf0',
        borderWidth: '0 1px',
    },
};
export const trendStyle: mediaStyle = {
    xs: {
        backgroundColor: 'green',
        display: 'none',
        marginLeft: '30px',
    },
    sm: {
        display: 'none',
    },
    md: {
        display: 'block',
    },
};
export const navStyle: mediaStyle = {
    xs: {
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        backgroundColor: 'red',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        top: 'auto',
        maxHeight: '100vh',
    },
    sm: {
        position: 'sticky',
        overflow: 'auto',
        top: 0,
        width: '68px',
        padding: '0 10px',
    },
    xl: {
        minWidth: '88px',
        width: '255px',
        paddingRight: '44px',
    },
};
