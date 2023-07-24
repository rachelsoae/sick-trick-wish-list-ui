import { useState } from 'react';

const Form = ({addTrick}) => {
  const [formData, setFormData] = useState({ 
      stance: '', 
      name: '', 
      obstacle: '', 
      tutorial: ''
    })
  
  const handleChange  = (e) => {
    setFormData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
    setTimeout(console.log(formData), 2000)
  }

  const createNewTrick = () => {
    return {...formData, id: Date.now()}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const trick = createNewTrick();
    addTrick(trick);
  }  
  return (
    <form>
      <select name='stance' onChange={(e) => handleChange(e)} value={formData.stance}>
       <option value=''>Choose Your Stance</option>
       <option value='regular'>Regular</option>
       <option value='switch'>Switch</option>
      </select>
      <input
        type='text'
        name='name'
        placeholder='Name of Trick'
        onChange={(e) => handleChange(e)}
        value={formData.name}
      />
      <select name='obstacle' onChange={(e) => handleChange(e)} value={formData.obstacle}>
       <option value=''>Choose Your Obstacle</option>
        <option value='flat-ground'>Flat Ground</option>
        <option value='ledge'>Ledge</option>
        <option value='rail'>Rail</option>
        <option value='stairs'>Stairs</option>
        <option value='pool'>Pool</option>
      </select>
      <input
        type='text'
        name='tutorial'
        placeholder='Link to Tutorial'
        onChange={(e) => handleChange(e)}
        value={formData.tutorial}
      />
      <input
        type='submit'
        name='submit'
        value='Send It!'
        onClick={(e) => handleSubmit(e)}
      />
    </form>
  )
}

export default Form;