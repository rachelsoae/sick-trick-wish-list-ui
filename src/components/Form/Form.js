import { useState } from 'react';
import { postNewTrick } from '../../apiCalls'

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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewTrick(formData)
    .then(response => addTrick(response));
  }  

  return (
    <form>
      <select 
        name='stance' 
        onChange={(e) => handleChange(e)} 
        value={formData.stance}
        data-cy='stance'
      >
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
        data-cy='name'
      />
      <select 
        name='obstacle' 
        onChange={(e) => handleChange(e)} 
        value={formData.obstacle}
        data-cy='obstacle'
      >
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
        data-cy='tutorial'
      />
      <input
        type='submit'
        name='submit'
        value='Send It!'
        onClick={(e) => handleSubmit(e)}
        data-cy='submit'
      />
    </form>
  )
}

export default Form;