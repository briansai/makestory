import 'bootstrap/dist/css/bootstrap.min.css';
import { buildClient } from '../api/buildClient';
import '../scss/pages/_app.scss';

const AppComponent = ({ Component, pageProps }) => <Component {...pageProps} />;
AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client
    );
  }

  return pageProps;
};
export default AppComponent;
