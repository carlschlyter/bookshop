import React from 'react'
import styles from '../styles/Layout.module.css'

export const TestHeader = ({content}) => {
    return (
        <div>
            <h2 className={styles.subTitle}> Här är testsidan</h2>            
        </div>
    )
}

export default TestHeader
