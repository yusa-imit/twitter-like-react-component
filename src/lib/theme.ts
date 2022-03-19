import {
    backgroundColors,
    primaryColors,
    subTextColors,
    textColors,
} from '../components/theme/default';
import { or } from './or';
import { ColorObject, GlobalTheme } from './type/theme';

function getStorage(storageOption?: number): Storage {
    switch (storageOption) {
        case 0 || undefined:
            return localStorage;
        case 1:
            return sessionStorage;
        default:
            return localStorage;
    }
}

const DEFAULT_THEME: GlobalTheme = {
    themeColor: 'light',
    primaryColor: 'blue',
};

export function setTheme(theme: GlobalTheme, options?: number) {
    getStorage(options).setItem('tlrc_global', JSON.stringify(theme));
}

export function getTheme(options?: number): GlobalTheme {
    if (options === 3) return DEFAULT_THEME;
    const item = getStorage(options).getItem('tlrc_global');
    if (item === null) {
        setTheme(DEFAULT_THEME);
        return DEFAULT_THEME;
    } else return JSON.parse(item);
}

export function getColor(
    backgroundColor?: string,
    textColor?: string,
    subTextColor?: string,
    primaryColor?: string,
    options?: number
): ColorObject {
    const theme = getTheme(options);
    return {
        backgroundColor: or(
            backgroundColor,
            backgroundColors[theme.themeColor]
        ),
        textColor: or(textColor, textColors[theme.themeColor]),
        subTextColor: or(subTextColor, subTextColors[theme.themeColor]),
        primaryColor: or(primaryColor, primaryColors[theme.primaryColor]),
    };
}
