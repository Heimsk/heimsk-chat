import React from 'react';
import styles from '@/styles/Button.module.scss';

interface IProps {
    label: string;
    type?: "button" | "submit" | "reset";
}

export default class Button extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        return <>
            <button type={this.props.type || "button"} id={styles.container}>
                {this.props.label}
            </button>
        </>
    }
}