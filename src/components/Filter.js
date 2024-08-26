import React from 'react'

const Filter = (props) => {
  return (
    <div>
        <button onClick={() => {props.setDone('All')}}>Все</button>
        <button onClick={() => {props.setDone('Active')}}>Выполненые</button>
        <button onClick={() => {props.setDone('Complites')}}>Не выполненые</button>
    </div>
  )
}

export default Filter