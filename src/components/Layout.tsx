import React from 'react';
import { getStyle, useMedia } from '../lib';
import { LayoutProps } from './props/LayoutProps';
import { mediaStyleSynthesis } from '../lib/mediaStyleSynthesis';
import {
    gridStyle,
    mainStyle,
    navStyle,
    asideStyle,
} from './styles/LayoutStyle';

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
            style={getStyle(
                currentMedia,
                mediaStyleSynthesis(
                    gridStyle,
                    styles?.gridStyle,
                    options?.renewStyle
                )
            )}
            {...attributes?.gridAttributes}
        >
            <nav
                style={getStyle(
                    currentMedia,
                    mediaStyleSynthesis(
                        navStyle,
                        styles?.navStyle,
                        options?.renewStyle
                    )
                )}
                {...attributes?.navAttributes}
            >
                {innerComponents?.nav}
            </nav>
            <main
                style={getStyle(
                    currentMedia,
                    mediaStyleSynthesis(
                        mainStyle,
                        styles?.mainStyle,
                        options?.renewStyle
                    )
                )}
                {...attributes?.mainAttributes}
            >
                {innerComponents?.main}
            </main>
            <aside
                style={getStyle(
                    currentMedia,
                    mediaStyleSynthesis(
                        asideStyle,
                        styles?.asideStyle,
                        options?.renewStyle
                    )
                )}
                {...attributes?.asideAttributes}
            >
                {innerComponents?.aside}
            </aside>
        </div>
    );
}
