import React, { HTMLAttributes } from 'react';
import { getStyle } from '../lib/getStyle';
import { queryInterface } from '../lib/media';
import { mediaStyle } from '../lib/type/mediaStyle';
import useMedia from '../lib/useMedia';
import { gridStyle, mainStyle, navStyle, trendStyle } from './LayoutStyle';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    mediaQuery?: queryInterface;
    mainStyle?: mediaStyle;
    trendStyle?: mediaStyle;
}

export default function Layout(_props: LayoutProps): JSX.Element {
    const currentMedia = useMedia();

    console.log(getStyle(currentMedia, gridStyle));
    return (
        <div style={getStyle(currentMedia, gridStyle)}>
            <nav style={getStyle(currentMedia, navStyle)}></nav>
            <main style={getStyle(currentMedia, mainStyle)}></main>
            <aside style={getStyle(currentMedia, trendStyle)}></aside>
        </div>
    );
}
