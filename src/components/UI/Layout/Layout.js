import React, { Fragment } from 'react';
import classes from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <Fragment>
            <div className={classes.pageContainer} >
                {children}
            </div>
        </Fragment>
    );
}
