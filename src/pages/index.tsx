import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../layout';
import './indexPage.scss';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Coming Soon!</h1>
        <p>This site still under construction ,</p>
        <p>Using AWS serverless + Django for backend and Gatsby + React + TS stack for Frontend.</p>
        {/*<Link to="/page-2/">Go to page 2</Link>*/}
      </Layout>
    );
  }
}

export default IndexPage;
