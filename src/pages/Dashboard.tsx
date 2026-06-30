import Sidebar from '../components/Sidebar';
import '../assets/styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <h1>Tableau de bord</h1>
        <p>La liste de vos chevaux apparaîtra ici.</p>
      </main>
    </div>
  );
}

export default Dashboard;