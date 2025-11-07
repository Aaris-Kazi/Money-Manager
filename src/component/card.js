import { useEffect, useState } from 'react'


const Card = ({ title, amount, mutedText, cardText }) => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    mutedText = isSmallScreen ? "" : mutedText;
    cardText = isSmallScreen ? "" : cardText;

    
    return (
        <div className="card cards">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{mutedText} <span className='card-amount'>${amount}</span></h6>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    )
}

export default Card