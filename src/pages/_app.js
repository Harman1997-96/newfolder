import "../global.css";
// import "../../Components/Header/HeaderStyle";
import HeaderStyle from "../Header/HeaderStyle";
// import "../Header/Header";
// import "./header";
// import "./HeaderLogo";
// const MyApp = ({ Component, pageProps }) => <Header />;
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
