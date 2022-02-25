import { mediaStyle } from "../../lib/type/mediaStyle";
import { availableQueryName } from "../../lib/type/queryType";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element | JSX.IntrinsicElements | SVGElement;
    text?: string;
    media: availableQueryName;
    styles?: {
        buttonStyle?: mediaStyle;
        iconStyle?: mediaStyle;
        textStyle?: mediaStyle;
    };
    options?: {};
}