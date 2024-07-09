import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="header">
        <h1>LOCAL HISTORY OF ZANZIBAR</h1>
      </div>
      <div className="navigation">
  <header>
  <nav>
    <h3>User Navigation</h3>
    <ul>
      <li><Link to='UserForm'>UserForm </Link></li>
      <li><Link to='View-Event' >View Event</Link></li>
      <li><Link to='change'>Change Account</Link></li>
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

export default Dashboard;
