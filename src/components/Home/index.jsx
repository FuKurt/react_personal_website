import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="title">
                <h1>
                    <p>Hi</p>
                    <p>I am Furkan Kurt</p>
                    <p>Software Developer</p>
                </h1>
                <Link to='/about'>
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <div className="person_circle">
                    <img src={`${process.env.PUBLIC_URL}/Furkan_Kurt_cv.png`} 
                         alt="person picture" />
                </div>
            </div>
        </div>
    );
}

export default Home;
