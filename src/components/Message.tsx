import React from 'react';
import styles from '@/styles/Message.module.scss';

export default class Message extends React.Component {
    public render() {
        return <>
            <div id={styles.container}>
                <div id={styles.overlay}></div>
                <div id={styles.avatar}></div>
                <div id={styles.infos}>
                    <div id={styles.top}>
                        <span id={styles.name}>Alguem</span>
                        <span id={styles.timestamp}>há 3 horas</span>
                    </div>
                    <div id={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores doloremque vel esse commodi beatae facere autem. Ducimus tempora cum, perspiciatis nemo, exercitationem possimus aliquid repudiandae, facilis quis commodi amet.</div>
                </div>
            </div>
        </>
    }
}
