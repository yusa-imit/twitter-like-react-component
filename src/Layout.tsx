import React, { HTMLAttributes, ReactChild } from 'react';
import { queryInterface } from './lib/media';
import { mediaStyle } from './lib/type/mediaStyle';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactChild;
    mediaQuery?: queryInterface;
    styleWithMedia?: mediaStyle;
}

export function Layout(props: LayoutProps): JSX.Element {
    return (
        <div className="grid justify-center min-h-screen my-0 mx-auto"></div>
    );
}
