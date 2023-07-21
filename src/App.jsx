import './app.scss'
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';

function App() {
    return (
        <div className="App">
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='explore'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </div>
    );
}

export default App;