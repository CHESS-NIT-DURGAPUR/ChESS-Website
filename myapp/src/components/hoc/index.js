import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;