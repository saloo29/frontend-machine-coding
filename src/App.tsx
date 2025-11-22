import StarRating from './components/StarRating';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className='content'>
      <StarRating starCount={10}/>
      <Accordion />
    </div>
  )
}

export default App
