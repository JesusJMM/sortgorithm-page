import {
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'
import Line from './Line.jsx';

export default function AddItems() {
  return (
    <Flex maxW="200px" w="100%" justifyContent="space-between">
      <Line h="40" />
      <Line h="45" color="#FFB800" />
      <Line h="35" />
      <Line h="20" />
      <Line h="25" />
      <Line h="30" />
      <Line h="15" />

      <motion.div
        animate={{
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{
          repeatType: 'loop',
          duration: 3,
          repeat: 'Infinity'
        }}
      >
        <Line h="40" />
      </motion.div>
      <motion.div
        animate={{
          opacity: [0, 0, 1, 0, 0]
        }}
        transition={{
          repeatType: 'loop',
          duration: 3,
          repeat: 'Infinity'
        }}
      >
        <Line h="45" />
      </motion.div>
    </Flex>

  )

}
