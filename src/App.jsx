import ContactApp from './components/ContactApp';
import Features from './components/Features';
import HeaderApp from './components/HeaderApp';
import ListCard from './components/ListCard';


import './css/App.css';
const App = () => {
  return (
    <div className='fondo-app '>
      <HeaderApp/>
      <Features/>
      <ListCard/>
      <ContactApp/>
    </div>
  )
}

export default App