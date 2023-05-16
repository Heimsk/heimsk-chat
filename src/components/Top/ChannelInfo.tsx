import React from "react";
import styles from "@/styles/Top/ChannelInfo.module.scss";
import { RiMessageFill } from "react-icons/ri";

export default class RightBar extends React.Component {
  public render() {
    return (
      <>
        <div id="channel__info" className={styles.container}>
          <i>
            <RiMessageFill />
          </i>
          <span>nome-do-canal</span>
        </div>
      </>
    );
  }
}
