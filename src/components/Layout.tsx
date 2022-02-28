import React from 'react';
import { getStyle } from '../lib/getStyle';
import { LayoutProps } from './props/LayoutProps';
import useMedia from '../lib/useMedia';
import {
    gridStyle,
    mainStyle,
    navStyle,
    asideStyle,
} from './styles/LayoutStyle';
import { or } from '../lib/or';

export default function Layout({
    innerComponents,
    attributes,
    styles,
    options,
}: LayoutProps): JSX.Element {
    const currentMedia = useMedia(
        options?.mediaQuery ? options?.mediaQuery : undefined
    );
    return (
        <div
            style={getStyle(currentMedia, or(styles?.gridStyle, gridStyle))}
            {...attributes?.gridAttributes}
        >
            <nav
                style={getStyle(currentMedia, or(styles?.navStyle, navStyle))}
                {...attributes?.navAttributes}
            >
                {innerComponents?.nav}
            </nav>
            <main
                style={getStyle(currentMedia, or(styles?.mainStyle, mainStyle))}
                {...attributes?.mainAttributes}
            >
                {innerComponents?.main}
            </main>
            <aside
                style={getStyle(
                    currentMedia,
                    or(styles?.asideStyle, asideStyle)
                )}
                {...attributes?.asideAttributes}
            >
                {innerComponents?.aside}
            </aside>
        </div>
    );
}


