import React from 'react'

const DisplayWidget = ({ widget }) => {
  const { description, name, price } = widget
  return (<div className={'display-widget'}>
    <div className={'widget-name'}>Name: {name}</div>
    <div className={'wiget-description'}>Description: {description}</div>
    <div className={'wiget-price'}>Price: ${price}</div>
  </div>)
}

export default DisplayWidget
