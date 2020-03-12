import React, { Component } from "react";
// import HomePage from "../pages/HomePage";
import SideBar from "../pages/SideBar";
import { Drawer } from "native-base";

export default class DrawerNavigation extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      ></Drawer>
    );
  }
}
