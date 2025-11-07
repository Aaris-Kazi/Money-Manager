import { useEffect, useState } from 'react'

const Notification = () => {

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

    if (isSmallScreen) {
        return null;
    } else {
        return (
            <div className="col-3 notfication-section">
                <span className="h4">Notification</span>
            </div>
        )
    }
}

export default Notification