import Card from '../Card/Card'
import './Tricks.css'

const Tricks = ({tricks}) => {
  const cards = tricks.map(trick => <Card key={trick.id} {...trick} />)
  return (
    <section className='cards-container'>
     {cards}
    </section>

  )
}

export default Tricks;