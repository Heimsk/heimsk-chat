import React from 'react';
import styles from "@/styles/Form/Input.module.scss";

interface IProps {
    label: string;
    type?: string;
}

export default class FormInput extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        return <>
            <div id={styles.container}>
                <label>{this.props.label}</label>
                <input required type={this.props.type || "text"} />
            </div>
        </>
    }
}