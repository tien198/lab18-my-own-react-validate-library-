import React from 'react';
import styles from './MainNavigation.module.css'
import { Link, NavLink } from 'react-router-dom';

const navList = [
    {
        url: '/quotes',
        title: 'All Quotes'
    },
    {
        url: '/new-quote',
        title: 'Add a quote'
    }
]
function MainNavigation(props) {
    return (
        <header className={styles['header']}>
            <span className={styles['logo']}>Greate Quotes</span>
            <nav className={styles['nav']}>
                <ul>
                    {
                        navList.map(i => (
                            <NavLink to={i.url} key={i.url}
                                className={({ isActive }) => isActive ? styles['active'] : ''}>
                                {i.title}
                            </NavLink>)
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;