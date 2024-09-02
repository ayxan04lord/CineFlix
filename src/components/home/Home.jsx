import ItemsList from '../ItemsList/ItemsList';
import './Home.css'

const Home = () => {
    return(
        <div className='Home'>
            
            <div className="container">
                <h1>Just added</h1>
                <ItemsList/>
                
            </div>
            

        </div>
    )
}

export default Home;