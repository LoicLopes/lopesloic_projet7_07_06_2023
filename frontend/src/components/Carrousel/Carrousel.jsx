import { useState } from 'react'
import arrow_left from '../../assets/icons/arrow_left.png'
import arrow_right from '../../assets/icons/arrow_right.png'

function Carrousel({ pictures }) {
  const [isActive, setActive] = useState(0)

  const buttonNext = () => {
    if (isActive === pictures.length - 1) {
      setActive(0)
    } else {
      setActive(isActive + 1)
    }
  }
  const buttonPrevious = () => {
    setActive(isActive === 0 ? pictures.length - 1 : isActive - 1)
  }
  return (
    <section className="carousel">
      {pictures.map((picture, index) => (
        <div
          className={isActive === index ? 'slide' : 'slide--hidden'}
          key={index}
        >
          {index === isActive && <img src={picture} alt="room" />}
        </div>
      ))}
      {pictures.length > 1 ? (
        <>
          <button className="button btn_next" onClick={buttonNext}>
            <img src={arrow_right} alt="button next" />
          </button>
          <button className="button btn_previous" onClick={buttonPrevious}>
            <img src={arrow_left} alt="button previous" />
          </button>
          <div className="counter">
            {isActive + 1}/{pictures.length}
          </div>
        </>
      ) : null}
    </section>
  )
}
export default Carrousel
