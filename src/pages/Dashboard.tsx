import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Cards from '../components/cards';
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
        <div className='horses-table'>
          <h2>Mes chevaux</h2>
          <table className='horses-table-content'>
            <tr className='horses-table-header'>
              <th className='col-name'>Cheval</th>
              <th className='col-race'>Race</th>
              <th className='col-step'>Etape</th>
              <th className='col-blup'>BLUP</th>
              <th className='col-button'></th>
            </tr>
            <tr className='horses-table-row'>
              <td className='horses-table-horse horses-table-horse-name'>
                <div className='horses-table-horse-image'>OL</div>
                <div className='horses-table-horse-info'>
                  <p>Orage de Lumière</p>
                  <p>Femelle</p>
                </div>
              </td>
              <td className='horses-table-horse'><p>Lusitanien</p></td>
              <td className='horses-table-horse'>
                <p className='horses-table-step-training'>Entraînement</p></td>
              <td className='horses-table-horse'>
                <div className='horses-table-blup'>
                  <div className='horses-table-blup-bar'>
                    <div className='horses-table-blup-fill'></div>
                    <div className='horses-table-blup-empty'></div>
                  </div>
                  <p className='horses-table-blup-percentage'>80</p>
                </div>
              </td>
              <td className='horses-table-horse horses-table-action'><button>Voir la fiche</button></td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;