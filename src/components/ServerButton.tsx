import React from "react";
import styles from "@/styles/ServerButton.module.scss";

export interface IButtonProps {
  notification?: boolean;
  active?: boolean;
  children?: React.ReactNode;
}

export default class ServerButton extends React.Component<IButtonProps> {
  public constructor(props: IButtonProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <button
          className={`${styles.button} ${this.props.active ? styles.active : ""
            } ${this.props.notification ? styles.notification : ""}`}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}
