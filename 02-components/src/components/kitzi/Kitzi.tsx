import kitziImage from '../../assets/images/kitzi.jpg';
import './Kitzi.css';


export default function Kitzi() {
    return (
        <div className="Kitzi">
            <h3>Kitzi</h3>
            <img src={kitziImage} />
        </div>
    );  
}
