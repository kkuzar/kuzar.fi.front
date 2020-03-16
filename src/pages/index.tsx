import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import './indexPage.scss';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Hi There</h1>
        <p>This is a attempt to make a personal site with static Gatsby</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
