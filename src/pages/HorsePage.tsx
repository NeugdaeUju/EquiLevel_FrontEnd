import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useState , useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchHorseById } from '../services/horseService';
import type { IHorse } from '../types/horse';
import '../assets/styles/horsePage.css';

const getInitials = (name: string): string =>
    name.split(' ').map((w) =>w[0]).join('').slice(0, 2).toUpperCase();

const AVATAR_COLORS = [
    { bg: '#F5C4B3', color: '#712B13' },
    { bg: '#B8D4E8', color: '#1A4A6B' },
    { bg: '#C8E6C9', color: '#1B5E20' },
    { bg: '#F8BBD9', color: '#880E4F' },
    { bg: '#D4B87A', color: '#3E2A00' },
    { bg: '#B39DDB', color: '#311B92' },
    { bg: '#F0D9C0', color: '#7A4A1E' },
    { bg: '#A8D5D1', color: '#00474F' },
    { bg: '#FFCC80', color: '#7F3300' },
    { bg: '#C5CAE9', color: '#1A237E' },
    { bg: '#D7CCC8', color: '#3E2723' },
    { bg: '#DCEDC8', color: '#33691E' },
];

const getAvatarColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const blupToWidth = (blup: number): number =>
    Math.round(((blup +100) / 200 ) * 100);

const stepClass: Record<IHorse['step'], string> = {
    'Naissance': 'badge-birth',
    'Croissance': 'badge-growth',
    'Entraînement': 'badge-train',
    'Compétition': 'badge-comp',
    'BLUP 100': 'badge-blup',
};

function HorsePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [horse, setHorse] = useState<IHorse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchHorseById(id)
            .then((data) => setHorse(data))
            .catch(() => setError('Cheval introuvable'))
            .finally(() => setLoading(false));
    }, [id]);

    const avatar = horse ? getAvatarColor(horse.name) : null;

    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="dashboard-content">
                <Header onOpenModal={() => setIsModalOpen(true)} title=''/>

                <Link to='/horses' className='hp-backToHorses'>Mes chevaux</Link>
                
                {loading && <p className='hp-loading'>Chargement...</p>}
                {error && <p className='hp-error'>{error}</p>}

                {horse && avatar && (
                    <>
                        <section className='hp-header-card'>
                            <div className='hp-banner'  style={{backgroundColor: avatar.color}} />
                            <div className='hp-header-body'>
                                <div
                                    className='hp-avatar'
                                    style={{backgroundColor: avatar.bg, color: avatar.color}}
                                >
                                    {getInitials(horse.name)}
                                </div>
                                <div className='hp-identity'>
                                    <h1 className='hp-name'>{horse.name}</h1>
                                    <p className='hp-meta'>
                                        {horse.race.name} · {horse.sex} · {horse.age}
                                    </p>
                                    <div className='hp-tags'>
                                        <span className={`hp-badge ${stepClass[horse.step]}`}>
                                            {horse.step}
                                        </span>
                                        <span className='hp-badge badge-neutral'>
                                            {horse.race.isPureBreed ? 'Pur-sang' : 'Croisé'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='hp-grid'>
                            <div className='hp-card'>
                                <h2 className='hp-card-title'>Identité</h2>
                                <div className='hp-info-row'>
                                    <span className='hp-info-key'>Nom</span>
                                    <span className='hp-info-val'>{horse.name}</span>
                                </div>
                                <div className='hp-info-row'>
                                    <span className='hp-info-key'>Race</span>
                                    <span className='hp-info-val'>{horse.race.name}</span>
                                </div>
                                <div className='hp-info-row'>
                                    <span className='hp-info-key'>Sexe</span>
                                    <span className='hp-info-val'>{horse.sex}</span>
                                </div>
                                <div className='hp-info-row'>
                                    <span className='hp-info-key'>Etape</span>
                                    <span className='hp-info-val'>{horse.step}</span>
                                </div>
                                <div className='hp-info-row'>
                                    <span className='hp-info-key'>Type</span>
                                    <span className='hp-info-val'>{new Date(horse.createdAt).toLocaleDateString('fr-FR')}</span>
                                </div>
                                <div className='hp-info-row'>
                                    <span className='hp-info-key'>Nom</span>
                                    <span className='hp-info-val'>{horse.name}</span>
                                </div>
                            </div>

                            <div className='hp-card'>
                                <h2 className='hp-card-title'>Progression BLUP</h2>
                                <div className='hp-blup-bar-row'>
                                    <span className='hp-blup-label'>BLUP actuel</span>
                                    <div className='hp-blup-track'>
                                        <div
                                            className='hp-blup-fill'
                                            style={{width: `${blupToWidth(horse.blup)}%` }}>
                                        </div>
                                    </div>
                                    <span className='hp-blup-val'>{horse.blup}</span>
                                </div>
                                <div className='hp-blup-total'>
                                    <span className='hp-blup-total-label'>Score</span>
                                    <span className='hp-blup-total-val'>{horse.blup} / 100</span>
                                </div>
                            </div>
                        </section>
                    
                    </>
                )}
                
            </main>
        </div>
    )
}

export default HorsePage;