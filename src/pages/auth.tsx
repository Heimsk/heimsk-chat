import React from 'react';
import styles from '@/styles/Login.module.scss';
import Form from '@/components/Form';

export default class LoginPage extends React.Component {
    public render() {
        return <>
            <div id={styles.container}>
                <Form type='login' />
            </div>
        </>
    }
}