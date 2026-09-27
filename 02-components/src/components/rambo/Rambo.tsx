import './Rambo.css';
import ramboImage from '../../assets/images/rambo.jpg';

export default function Rambo() {
    return (
        <div className="Rambo">
            <h3>Rambo</h3>
            <img src={ramboImage} />
        </div>
    );  
}