import {Link} from 'react-router-dom'

type CardProps = {
    link: string;
    name: string
}

function EspecesCard({link, name}: CardProps) {
    return (
        <figure className='especes-container__list--especes'>
            <Link to={link}>
                <div className='especes-container__list--especes__image'></div> {/* Cette div deviendra une image */}
                <figcaption className='especes-container__list--especes__name'>{name}</figcaption>
            </Link>
        </figure> 
    )
    
}

export default EspecesCard