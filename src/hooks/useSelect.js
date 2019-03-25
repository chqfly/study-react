import {useState,useEffect} from 'react'

function useSelect(initId) {
  const [dataSource, setDataSource] = useState([])
  const [dataSource2, setDataSource2] = useState([])
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [id, setId]= useState(initId)

  useEffect(() => {
    if (id) {
      setLoading2(true)
      featchData(id).then((data) => {
        setLoading2(false)
        setDataSource2(data)
      })
    } else {
      setLoading(true)
      featchData(id).then((data) => {
        setLoading(false)
        setDataSource(data)
      })
    }
  }, [id])

  return {dataSource, dataSource2, loading, loading2, setId}
}



function delay(ms) {
  return new Promise((reslove)=> {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      reslove()
    }, ms);
  })
}
function featchData(id) {
  return delay(2000).then(() => {

    if (id === 1) {
      return [{
        value: 1,
        label: 'aaaaaaa'
      },{
        value: 2,
        label: 'bbbbbbb'
      },{
        value: 3,
        label: 'ccccccc'
      },{
        value: 4,
        label: 'ddddddd'
      }]
    } else {
      return [{
        value: 1,
        label: 'aaaaaaa'
      },{
        value: 2,
        label: 'bbbbbbb'
      }]
    }
    
  })
}

export default useSelect