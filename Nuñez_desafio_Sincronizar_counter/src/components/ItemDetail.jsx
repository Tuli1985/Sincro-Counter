import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

function BuyingConfirmation({ amount, title, close }) {
  const navigate = useNavigate(),
    toCart = () => {
      navigate('/cart')
    }

  return (
    <div className="buying-confirmation">
      <div className="close-btn" onClick={close}>
        <FaTimes />
      </div>

      <h1>
        You are buying {amount} of{' '}
        <span className="product-name">"{title}"</span>
      </h1>
      <div className="add-to-cart">
        <button onClick={toCart}>
          <span className="button_top">Check-out</span>
        </button>
      </div>
    </div>
  )
}

function ProductDetail({ title, price, image, description }) {
  const [amount, setAmount] = useState(0)
  const onAdd = amount => {
    console.log(amount)
    setAmount(amount)
  }
  const close = () => {
    setAmount(0)
  }

  return (
    <>
      {amount !== 0 && (
        <BuyingConfirmation amount={amount} title={title} close={close} />
      )}
      <div className="product-detail">
        <div className="detail-image">
          <img src={image} alt={`${title}`} />
        </div>

        <div className="detail-body">
          <div className="detail-title">
            <h3>{title}</h3>
          </div>
          <div className="detail-description">
            <p>{description}</p>
          </div>
          <div className="detail-price">
            <p>{price}</p>
          </div>
          {amount == 0 && (
            <ItemCount initial={1} stock={10} unit={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  )
}

function ItemDetail({ data }) {
  return (
    <>
      <ProductDetail
        title={data.title}
        image={data.image}
        price={data.price}
        description={data.description}
      />
    </>
  )
}

export default ItemDetail
