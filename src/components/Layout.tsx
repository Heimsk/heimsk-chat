import React from "react";
import styles from "@/styles/Layout.module.scss";
import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import Channels from "./Channels";
import RightBar from "./RightBar";
import Actions from "./Top/Actions";
import Center from "./Center";
import ChannelInfo from "./Top/ChannelInfo";
import Top from "./Top";

export default class Layout extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <div id={styles.inner__container}>
            <div className={styles.flex}>
              <Sidebar />
              <div>
                <Channels />
                <UserInfo />
              </div>
              <div className={styles.column}>
                <Top />
                <div className={styles.flex}>
                  <Center />
                  <RightBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
