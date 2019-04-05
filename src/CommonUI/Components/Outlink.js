import React from 'react'
import styles from './Outlink.module.css'

const link = ({ to, ...props }) => (
    <a
        href={to}
        {...props}
        className={styles.link}
    >
        {props.children}
    </a>
)

export default link