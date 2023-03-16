import './DefaultLayout.scss';
import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="Container">
        <div className="Content">{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default DefaultLayout;