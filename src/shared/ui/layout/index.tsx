import React from 'react';

export interface LayoutProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}

const Layout = ({ header, children, footer }: LayoutProps) => {
    return (
        <>
            <header>{header}</header>
            <main className="flex-1 flex-auto py-2">{children}</main>
            <footer>{footer}</footer>
        </>
    );
};

export { Layout };
