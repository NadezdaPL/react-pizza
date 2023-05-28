import { useState } from "react";



function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [pizzaCount, setPizzaCount] = useState(0);

  const onClickAdd = () => {
    setPizzaCount(pizzaCount +1)
  }

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['Thin Crust', 'Deep Pan'];
  
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <h4 className="pizza-block__title">{title}</h4>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <div className="pizza-block__selector">
          <ul>
            {
              types.map((type) => (<li key={type} onClick={() => setActiveType(type)} className={activeType === type ? 'active' : ''}>{typeNames[type]}</li>))
            }
          </ul>
          <ul>
            {
              sizes.map((size, i) => (<li key={size} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>{size} cm</li>))
            }
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">from {price} ₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg 
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="" />
              </svg>
              <span>Add</span>
              <i>{pizzaCount}</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaBlock;