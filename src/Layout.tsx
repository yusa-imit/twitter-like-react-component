import React, { HTMLAttributes, ReactChild } from 'react';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactChild;
}

export function Layout(props: LayoutProps): JSX.Element {
    return (
        <div className="grid justify-center min-h-screen my-0 mx-auto"></div>
    );
}
