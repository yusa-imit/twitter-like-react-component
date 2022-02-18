type queryName = "sm" | "md" | "lg" | "xl";
export type availableQueryName = queryName | "xs";


export type queryInterface = {
    [key in queryName]: number;
};

export const mediaQuery: queryInterface = {
    "sm": 500,
    "md": 1005,
    "lg": 1095,
    "xl": 1280
}
