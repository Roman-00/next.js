import React from 'react';
import { Headerprops } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({ ...props }: Headerprops): JSX.Element => {
    return (
        <header {...props}>
            Header
        </header>
    );
};