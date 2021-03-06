/* eslint-disable no-trailing-spaces */

import React from "react";
import {
  Grid,
  GridItem,
  Stack,
  StackItem,
  Dropdown,
  DropdownItem,
  TextField,
  Button,
  Tabs,
  TabsItem,
  Icon
} from "nr1";

import DetailPane from '../../components/DetailPane'

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class NerdpackLayoutDoubleSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDetailPane = this.toggleDetailPane.bind(this)
    this.onCloseHandler = this.onCloseHandler.bind(this)

    this.state = {
      detailPanelActive: true,
      detailPaneExpanded: true
    }
  }

  toggleDetailPane() {
    this.setState({detailPaneExpanded: !this.state.detailPaneExpanded})
  }
  
  onCloseHandler() {
    this.setState({ detailPanelActive: false })
  }

  render() {
    const { detailPaneExpanded, detailPanelActive } = this.state

    return (
      <React.Fragment>
        <Stack
          className="toolbar-container"
          fullWidth
          gapType={Stack.GAP_TYPE.NONE}
          horizontalType={Stack.HORIZONTAL_TYPE.FILL_EVENLY}
          verticalType={Stack.VERTICAL_TYPE.FILL}
        >
          <StackItem className="toolbar-section1">
            <Stack
              gapType={Stack.GAP_TYPE.NONE}
              fullWidth
              verticalType={Stack.VERTICAL_TYPE.FILL}
            >
              <StackItem className="toolbar-item has-separator">
                <Dropdown label="Dropdown" title="Choose an option">
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </Dropdown>
              </StackItem>
              <StackItem className="toolbar-item">
                <TextField
                  label="Search"
                  placeholder="e.g. example query"
                ></TextField>
              </StackItem>
            </Stack>
          </StackItem>
          <StackItem className="toolbar-section2">
            <Stack
              fullWidth
              fullHeight
              verticalType={Stack.VERTICAL_TYPE.CENTER}
              horizontalType={Stack.HORIZONTAL_TYPE.RIGHT}
            >
              <StackItem>
                <Button
                  onClick={() => alert("You clicked me!")}
                  type={Button.TYPE.PRIMARY}
                >
                  Primary button
                </Button>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
        <Grid
          className={`primary-grid ${detailPaneExpanded ? 'detail-pane-grid-expanded' : 'detail-pane-grid-minimized'}`}
          spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
          
        >
          {/*
            Note: This sidebar does _not_ have to be a list of links/navigation.
            It can just as easily contain content. This is just an example of how it
            may be used.
          */}
          <GridItem className="sidebar-container" columnSpan={3}>
            <ul className="sidebar-list">
              {/* Create an array that we'll use to display a bunch of list items */}
              {Array.from(Array(50).keys()).map(item => {
                return <li className="sidebar-list-item" key={item}>List item {item}</li>;
              })}
            </ul>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={detailPaneExpanded && detailPanelActive ? 6 : 9}>
            <main className="primary-content full-height">
              <Stack
                className="empty-state"
                fullWidth
                fullHeight
                verticalType={Stack.VERTICAL_TYPE.CENTER}
                horizontalType={Stack.HORIZONTAL_TYPE.CENTER}
                directionType={Stack.DIRECTION_TYPE.VERTICAL}
                gapType={Stack.GAP_TYPE.NONE}
              >
                <StackItem>
                  <h4 className="empty-state-header">How to use this layout</h4>
                </StackItem>
                <StackItem>
                  <p className="empty-state-description">
                    Open up
                    <code>nerdpack-layout-double-sidebar-nerdlet/index.js</code> and
                    replace dummy content with your content. Have suggestions,
                    concerns, or ideas for how this template could be better?
                    Feel free to <a href="https://github.com/newrelic/nr1-nerdpack-layout-double-sidebar">submit an issue or PR :)</a>
                    .
                  </p>
                </StackItem>
              </Stack>
            </main>
          </GridItem>
          <GridItem className={`detail-pane-grid-item `} columnSpan={detailPaneExpanded && detailPanelActive ? 3 : 0}>
            <DetailPane className={!detailPanelActive ? `detail-pane-hidden` : ''} toggleDetailPane={this.toggleDetailPane} onClose={this.onCloseHandler}></DetailPane>
          </GridItem>
        </Grid>
      </React.Fragment>
    );
  }
}
