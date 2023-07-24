import './Card.css'

const Card = ({stance, name, obstacle, tutorial}) => {
  const formatCaps = (string) => {
    const split = string.split('');
    const capped = split[0].toUpperCase();
    split.shift();
    split.unshift(capped)
    const formatted = split.join('')
    return formatted;
  }
  
  return (
    <article>
      <p>{formatCaps(stance)} {formatCaps(name)}</p>
      <p>Obstacle: {formatCaps(obstacle)}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </article>
  )
}

export default Card;