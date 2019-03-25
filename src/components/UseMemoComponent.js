import * as React from 'react'
import {Button, Input} from 'antd'

const { useState, useMemo, useRef } = React

const UseMemoComponent = () => {
  const [plusCount, setPlusCount] = useState(0)
  const [minusCount, setMinusCount] = useState(0)

  const inputRef = useRef(null)

  const count = useMemo((...rest) => {
    // console.log(rest)
  }, [plusCount,minusCount])

  console.log(count)

  

  const onButtonClick = () => {
    console.log(inputRef)
    // `current` points to the mounted text input element
    inputRef.current.focus();
  };

  return (
    <div>
      <span>{plusCount}</span>
      <Button onClick={() => setPlusCount(plusCount + 1)}>plus</Button>
      <br/>
      <span>{minusCount}</span>
      <Button onClick={() => setMinusCount(minusCount + 1)}>minus</Button>

      <Button onClick={onButtonClick}>minus</Button>
      <Input ref={inputRef}/>
    </div>
  )
  
}

export default UseMemoComponent


/** 
 * useMemo(function, 依赖数组),接受两个参数，第一个是函数，用于计算结果值，第二个是依赖项
 * 相当于是一个带有缓存的计算器
 * 只有当依赖项发生变化，它才会重新执行传入的函数，返回新的值
 * 如果依赖项不发生变化，则不会重新执行传入的函数，返回旧的值
 * 
 * 如果依赖项，传入一个空数组，第一次render的时候，会执行这个函数，后面永远不会执行
 * 如果依赖项，不传值，那么每次render都会执行
 * 
 * 
 */