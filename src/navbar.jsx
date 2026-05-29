import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-page">
      <h1>Navbar</h1>
      <p>This is the Navbar page.</p>
      <button
        className="dashboard-button"
        onClick={() => navigate(-1)}
      >
        Back to Dashboard
      </button>
    </div>
  );
}
 
export default Navbar;
