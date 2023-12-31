import './Dashboard.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const Dashboard = () => {
  return (
    <div className="s2t-content">
      <SideMenu />
      <div className="s2t-tablet">
        <h1>Dashboard</h1>
        <p>Stats...</p>
      </div>
    </div>
  );
};

export default Dashboard;

