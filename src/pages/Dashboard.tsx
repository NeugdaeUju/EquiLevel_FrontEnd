import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../assets/styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Header />
      </main>
    </div>
  );
}

export default Dashboard;