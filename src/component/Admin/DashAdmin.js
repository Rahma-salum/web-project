import { Link, Outlet } from "react-router-dom";

function DashAdmin() {
  return (
    <>
      <div className="header">
        <h1>MANGAPWANI</h1>
      </div>
      <div className="navigation">
  <header>
  <nav>
    <h3>Admin Navigation</h3>
    <ul>
      <li><Link to='admin'>Dashboard</Link></li>
      <li><Link to='change-info'>Change Info</Link></li>
      <li><Link to='userlist' >user list</Link></li>
      <li><Link to='Event-List'>Event List</Link></li>
      <li><Link to='/'>logout</Link></li>
    </ul>
  </nav>
</header>

      </div> 
      <div className="main">
            <Outlet/>
        </div>

      <div className="footer">
          <h4> The local history of ZANZIBAR@2024</h4>
      </div>
    </>
  );
}

export default DashAdmin;
