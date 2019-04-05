import React from 'react'
import Outlink from '../../../CommonUI/Components/Outlink'

import styles from './OutlinkButton.module.css'

const OutlinkButton = (props) => {
    const { to } = props
    return (
        <div className={styles.outlinkButton}>
            <Outlink
                to={to}
            >{props.children}</Outlink>
        </div>
    )
}

export default OutlinkButton