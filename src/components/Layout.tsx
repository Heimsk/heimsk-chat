import React from "react";
import styles from "@/styles/Layout.module.scss";
import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import Channels from "./Channels";
import RightBar from "./RightBar";
import Center from "./Center";
import Top from "./Top";

interface IState {
  usersClosed: boolean;
}

export default class Layout extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);

    this.state = {
      usersClosed: false
    }

    this.toggleUsers = this.toggleUsers.bind(this);
  }

  public toggleUsers() {
    this.setState({ usersClosed: !this.state.usersClosed });
  }

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
                <Top toggle={this.toggleUsers} />
                <div className={styles.flex}>
                  <Center />
                  {!this.state.usersClosed ? 
                  <RightBar />
                  : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
