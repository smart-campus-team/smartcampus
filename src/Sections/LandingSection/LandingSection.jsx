import React, {Component} from 'react'
import styles from './LandingSection.module.css'

export class LandingSection extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.resizeImage} src={require("../../CommonUI/img/logos/sclogo_4.png")} alt="SmartCampus logo"/>
                </div>
            </div>
        )
    }
}