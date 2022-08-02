import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data/data';
import './css/App.css';

function App() {
    let counter = data.length;
    const cards = data.map((c) => {
        counter--;
        return (
            <div>
                <Card key={c.id} {...c} />
                {counter !== 0 && <hr className="container" />}
            </div>
        );
    });
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    );
}

export default App;
