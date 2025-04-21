import Pages from "../app/pages";
import Index from "../app/index/Index";
import Layout from "../app/layout/Layout";

const ProtectedHome = () => {
  const isLoggedIn = !!localStorage.getItem("TokenLogin");

  if (isLoggedIn) {
    return (
      <Layout>
        <Pages />
      </Layout>
    );
  }

  return <Index />;
};

export default ProtectedHome;
