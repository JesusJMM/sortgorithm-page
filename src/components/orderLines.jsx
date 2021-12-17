import {
  Box
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const OrderLines = ({orders, width, height}) => {
  if(orders[0] === undefined){
    throw new Error("The orders prop must at least a enpty array width one enpty array : '[[]]'")
  }
  return (
    <Box w={width} position="relative" height={height || "300px"}>
      {orders[0].map((_, curItem) => (
        <motion.div
          key={curItem}
          animate={{ x: orders.map((order) => order[curItem] * width/ orders[0].length) }}
          style={{ 
            height: `${curItem === 0 ? 2 : curItem * 100 / orders[0].length}%`,
            backgroundColor: curItem === 1 ? "#FFB800" : "gray" 
          }}
          transition={{ delay: 3 + curItem * 0.05, duration: orders.length }}
          className="line"
        />
      ))}
    </Box>
  )
}
export default OrderLines;
