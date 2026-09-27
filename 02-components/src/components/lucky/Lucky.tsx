import './Lucky.css';
import luckyImage from '../../assets/images/lucky.jpg';

export default function Lucky() {
    return (
        <div className="Lucky">
            <h3>Lucky</h3>
            <img src={luckyImage} />
        </div>
    );  
}