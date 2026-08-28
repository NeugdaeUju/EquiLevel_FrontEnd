import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Cards from '../components/Cards';
import '../assets/styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Header />
        <div className='cards-container'>
          <Cards 
            title="Total chevaux"
            number={12}
            description="3 poulains · 9 adultes"/>
            <Cards 
            title="BLUP 100 ATTEINT"
            number={4}
            description="↑ +1 ce mois"/>
            <Cards 
            title="en progression"
            number={6}
            description="Entraînement actif"/>
            <Cards 
            title="BLUP moyen"
            number={84}
            description="Objectif : 100"/>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;