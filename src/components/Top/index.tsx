import React from "react";
import styles from "@/styles/Top/Top.module.scss";
import ChannelInfo from "./ChannelInfo";
import Actions from "./Actions";

interface IProps {
  toggle: any;
}

export default class RightBar extends React.Component<IProps> {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <ChannelInfo />
          <Actions toggle={this.props.toggle} />
        </div>
      </>
    );
  }
}
