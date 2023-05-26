import React from "react";
import styles from "@/styles/SidebarStyles/Explore.module.scss";
import Button from "../ServerButton";

// icons
import { FaPlus, FaCompass } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

export default class Explore extends React.Component {
  public render() {
    return (
      <>
        <div id={styles.container}>
          <Button>
            <RiMessage2Fill />
          </Button>
          <Button>
            <FaCompass />
          </Button>
          <Button>
            <FaPlus />
          </Button>
        </div>
      </>
    );
  }
}
