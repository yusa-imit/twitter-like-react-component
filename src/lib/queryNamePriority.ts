import { availableQueryName } from './type/queryType';

type queryNamePriorityType = {
    [key in availableQueryName]: number;
};

export const queryNamePriority: queryNamePriorityType = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
};
