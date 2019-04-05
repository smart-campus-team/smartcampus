import React, {Component} from 'react'
import classNames from 'classnames'
// import styles from  './HeaderSection.css'
import styles from  './HeaderSection.module.css'
import OutlinkButton from './Components/OutlinkButton'


export class HeaderSection extends Component{
    constructor(props) {
        super(props)
        this.state = {
            mobileView: false,
            dropMenu: false,
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    toggleMenu = () => {
        this.setState(prevState => {
            return {
                dropMenu: !prevState.dropMenu,
            }
        })
    }
      
    // To update the window dimensions in order to change the header section accordingly
    updateWindowDimensions = () => {
        if(window.innerWidth < 760) {
            this.setState({
                mobileView: true,
            })
        } else {
            this.setState({
                mobileView: false,
                dropMenu: false,
            })
        }
        // console.log('window dimensions', window.innerWidth, window.innerHeight)
        // console.log('mobileView', this.state.mobileView)
    }

    render() {
        const { mobileView, dropMenu } = this.state
        return (
            <div className={styles.container}>
                <div className={styles.horizontalSection}>
                    <div className={styles.logo}>
                        <b><i>SC LOGO</i></b>
                    </div>
                    <div className={styles.rightEnd}>
                        {!mobileView ?
                            <div className={styles.menu}>
                                <div className={styles.menuItem}>
                                    <OutlinkButton to={'#'}>GitHub</OutlinkButton>
                                </div>
                                <div className={styles.menuItem}>
                                    <OutlinkButton to={'#'}>About</OutlinkButton>
                                </div>
                                <div className={styles.menuItem}>
                                    <OutlinkButton to={'#'}>Our Team</OutlinkButton>
                                </div>
                            </div>
                            : (
                                <div className={styles.mobileMenu}>
                                    <div className={styles.icon}>
                                    {/* <img src={} alt="Menu Bar" width="24px" height="24px"/> */}
                                        <span
                                            className={classNames(styles.menuIcon, styles.icon)}
                                            onClick={this.toggleMenu}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    mobileView && dropMenu && (
                        <div className={classNames(styles.dropMenu, {[`${styles.dropMenuActive}`]: dropMenu})}>
                            <div className={styles.menuItemDropdown}>
                                <OutlinkButton to={'#'}>GitHub</OutlinkButton>
                            </div>
                            <div className={styles.menuItemDropdown}>
                                <OutlinkButton to={'#'}>About</OutlinkButton>
                            </div>
                            <div className={styles.menuItemDropdown}>
                                <OutlinkButton to={'#'}>Our Team</OutlinkButton>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}