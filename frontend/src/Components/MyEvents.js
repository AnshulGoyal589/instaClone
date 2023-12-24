import React from 'react'

const MyEvents = ({ events }) => {
  return (
    <ul>
    {
      events.map((event, index) =>
        <li key={ index }>{ event }</li>
      )
    }
    </ul>
  )
}

export default MyEvents