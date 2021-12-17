import { useEffect, useState } from 'react'
import {
  Flex
} from '@chakra-ui/react'
import Line from './Line.jsx'

function createArrayFromLength(len, obj=0){
  let out = []
  for(let i = 0; i < len; i++){
    out.push(obj)
  }
  return out
}

export default function TrackAnItem({len}) {
  const [items, setItem] = useState(createArrayFromLength(len))
  const selectItem = () => {
    const randomIndex = Math.ceil(Math.random() * (len - 1))
    let out = createArrayFromLength(len)
    out[randomIndex] = 1
    setItem(out)
  }
  useEffect(() => {
    setTimeout(selectItem, 500)
  })
  return (
    <Flex maxW="200px" w="100%" justifyContent="space-between">
    {items.map((v, i) => (
      <Line key={i} color={v && "#FFB800"}/>
      ))}
    </Flex>
  )
}
