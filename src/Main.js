import React from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import { withRouter } from "react-router-dom";
// import MainPage from "./MainPage";

const getPageNameByPath = (pagePath = null) => {
  if (!pagePath) return "";

  switch (pagePath) {
    case "/":
      return "Homepage";
    case "/online-classes":
      return "Online Classes";
    default:
      return "404 Page";
  }
};

class Main extends React.Component {
  render() {
    const pageName = getPageNameByPath(this.props.location.pathname);

    return (
      <>
        <Breadcrumb currentPageName={pageName} />
        <PageWrapper pageName={pageName} />
      </>
    );
  }
}

export default withRouter(Main);
