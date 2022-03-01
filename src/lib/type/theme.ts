export type ThemeColors = 'light' | 'dark' | 'darker';
export type PrimaryColors = 'blue' | 'yellow' | 'pink' | 'purple' | 'orange' | 'green';

export interface GlobalTheme {
    themeColor: ThemeColors;
    primaryColor: PrimaryColors;
}

export interface ColorObject {
    backgroundColor: string;
    textColor: string;
    subTextColor: string;
    primaryColor: string;
}