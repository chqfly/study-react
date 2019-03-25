import React from 'react';
import {useWindowWidth} from '../hooks'

const ShowWindowWidth = () =>  {
  const width = useWindowWidth()
  return (
    <div>{width}</div>
  )
}

export default ShowWindowWidth