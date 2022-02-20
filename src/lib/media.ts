import { availableQueryName } from './type/queryType';

export type queryInterface = {
    [key in availableQueryName]: number;
};

export const mediaQuery: queryInterface = {
    xs: 0,
    sm: 500,
    md: 1005,
    lg: 1095,
    xl: 1280,
};
