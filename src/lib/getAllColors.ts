import {
    backgroundColors,
    primaryColors,
    textColors,
    subTextColors,
} from '../components/theme/default';

export function getAllColors() {
    return {
        backgroundColor: backgroundColors,
        primaryColor: primaryColors,
        textColor: textColors,
        subTextColor: subTextColors,
    };
}
