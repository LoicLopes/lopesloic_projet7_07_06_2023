import { useState } from 'react'
import icon_arrow from '../../assets/icons/arrow.png'

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="Collapse">
      <div className="Collapse__header">
        {props.title}
        <button onClick={() => setIsOpen((previousState) => !previousState)}>
          <img
            className={`arrow ${isOpen ? 'arrow--up' : 'arrow--down'}`}
            src={icon_arrow}
            alt={isOpen ? 'close button' : 'open button'}
          />
        </button>
      </div>
      {Array.isArray(props.content) ? (
        <ul className={isOpen ? 'content' : 'content--hidden'}>
          {props.content.map((equipment, index) => (
            <li key={`${equipment}-${index}`}>{equipment}</li>
          ))}
        </ul>
      ) : (
        <div className={isOpen ? 'content' : 'content--hidden'}>
          {props.content}
          {props.children}
        </div>
      )}
    </div>
  )
}
export default Collapse
