import MainNavbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <>
      <MainNavbar />
      <div className="d-flex" style={{ marginTop: '-1px' }}>
        <Sidebar />
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;