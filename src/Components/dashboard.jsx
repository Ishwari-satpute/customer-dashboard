import { useNavigate } from "react-router-dom";

const Dashboard = ({ userName = "Guest" }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <header className="dashboard-navbar">
        <button className="dashboard-button" onClick={() => navigate("/navbar")}>Navbar</button>

        <div className="dashboard-user">
          <span>Profile:</span>
          <strong>{userName}</strong>
        </div>
      </header>

      <main className="dashboard-main">
        <h1>Dashboard</h1>
        <p>Welcome back, {userName}. This is your dashboard overview.</p>
      </main>
    </div>
  );
};

export default Dashboard;
