import * as React from 'react'
const { useState, useEffect} = React

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleSize = () => {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }

  }, [width])

  return width
}

export default useWindowWidth