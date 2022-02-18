import { queryName } from "./type/queryType";


export type queryInterface = {
    [key in queryName]: number;
};

export const mediaQuery: queryInterface = {
    "sm": 500,
    "md": 1005,
    "lg": 1095,
    "xl": 1280
}
