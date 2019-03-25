import * as React from 'react'
import {Select} from 'antd'
import {useSelect} from '../hooks'

const Option = Select.Option
const Fragment = React.Fragment

function UseSelectComponent() {
  const {dataSource, dataSource2,loading, loading2, setId} = useSelect()
  return (
    <Fragment>

      <Select style={{width: 200}} loading={loading} onChange={(value) => {setId(value)}}>
      {
        dataSource.map((item) => <Option key={item.value} value={item.value}>{item.label}</Option>)
      }
      </Select>
      <Select style={{width: 200}} loading={loading2}>
      {
        dataSource2.map((item) => <Option key={item.value} value={item.value}>{item.label}</Option>)
      }
      </Select>
    </Fragment>
  )
}

export default UseSelectComponent