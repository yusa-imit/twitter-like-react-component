import { queryInterface } from '../../lib/media';
import { mediaStyle } from '../../lib/type/mediaStyle';

export interface LayoutProps {
    innerComponents?: {
        nav?:
            | JSX.Element
            | JSX.IntrinsicElements
            | Array<JSX.Element>
            | Array<JSX.IntrinsicElements>;
        main?:
            | JSX.Element
            | JSX.IntrinsicElements
            | Array<JSX.Element>
            | Array<JSX.IntrinsicElements>;
        aside?:
            | JSX.Element
            | JSX.IntrinsicElements
            | Array<JSX.Element>
            | Array<JSX.IntrinsicElements>;
    };
    attributes?: {
        gridAttributes?: React.HTMLAttributes<HTMLDivElement>;
        navAttributes?: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        >;
        mainAttributes?: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        >;
        asideAttributes?: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        >;
    };
    styles?: {
        gridStyle?: mediaStyle;
        navStyle?: mediaStyle;
        mainStyle?: mediaStyle;
        asideStyle?: mediaStyle;
    };
    options?: {
        mediaQuery?: queryInterface;
    };
}
