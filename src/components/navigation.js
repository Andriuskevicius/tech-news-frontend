import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const burger = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M945.172 561.724h-866.376c-22.364 0-40.55-18.196-40.55-40.591 0-22.385 18.186-40.581 40.55-40.581h866.365c22.385 0 40.561 18.196 40.561 40.581 0.010 22.395-18.176 40.591-40.55 40.591v0zM945.183 330.403h-866.386c-22.374 0-40.55-18.196-40.55-40.571 0-22.405 18.176-40.612 40.55-40.612h866.376c22.374 0 40.561 18.207 40.561 40.612 0.010 22.364-18.186 40.571-40.55 40.571v0zM945.172 793.066h-866.376c-22.374 0-40.55-18.196-40.55-40.602 0-22.385 18.176-40.581 40.55-40.581h866.365c22.385 0 40.581 18.196 40.581 40.581 0.010 22.395-18.196 40.602-40.571 40.602v0z"></path></svg>;

const Navigation = () => (
  <div className={styles.header}>
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo} />
        <div className={styles.logoTextWrap}><span className={styles.navigationLogo}>CYBER</span><span>Scalps</span></div>
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <div to="/" activeClassName="active" className={styles.burger}>
            <span>Viskas</span>
            {burger}
          </div>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Robotika
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/kripto/" activeClassName="active">
            Kripto
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/ai/" activeClassName="active">
            AI
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/apps/" activeClassName="active">
            Apps
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/startuoliai/" activeClassName="active">
            Startuoliai
          </Link>
        </li>
      </ul>
      <div className={styles.social}></div>
    </nav>
  </div>
)

export default Navigation
