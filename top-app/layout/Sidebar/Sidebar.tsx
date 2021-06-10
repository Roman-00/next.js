import React from 'react';
import { Sidebarprops } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ ...props }: Sidebarprops): JSX.Element => {
    return (
        <div {...props}>
           Sidebar
        </div>
    );
};