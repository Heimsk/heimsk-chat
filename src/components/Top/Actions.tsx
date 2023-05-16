import React from "react";
import styles from "@/styles/Top/Actions.module.scss";

import { GoMention } from 'react-icons/go';
import { HiUsers } from 'react-icons/hi';

interface IProps {
  toggle: any;
}

export default class RightBar extends React.Component<IProps> {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <i onClick={this.props.toggle}><HiUsers /></i>
          <input placeholder="Busque algo" />
          <i><GoMention /></i>
        </div>
      </>
    );
  }
}
