import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from '../components/Button';
import Menu from '../components/Menu';

import './app.css';

const App = () => (
  <div styleName="app">
    <Menu fixed>
      <Menu.Item>Some place</Menu.Item>
      <Menu.Menu pullRight>
        <Menu.Item>Group item</Menu.Item>
        <Menu.Item>Group item</Menu.Item>
        <Menu.Item>Group item</Menu.Item>
      </Menu.Menu>
    </Menu>
    <Container fluid styleName="padded">
      <Row>
        <Col sm={4}>
          <Button primary>From demo</Button>
        </Col>
        <Col sm={8}>
          center column To get started, edit <code>src/App.js</code> and save to reload.
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
