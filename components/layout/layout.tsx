import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from '@components/navbar/navbar';
import Footer from 'components/footer/footer';
import { type } from 'os';
import layout from '@components/layout/layout';

type LayoutProps = {
    children?: React.ReactNode
}

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container as="main">
                {children}
            </Container>
            <Footer />
        </>
    )
}
export default Layout
