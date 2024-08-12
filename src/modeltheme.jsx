import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)


const baseStyle = definePartsStyle({

  // define the part you're going to style
  overlay: {
     //change the background
  
  },
  dialog: {
    // borderRadius: 'md',
    // w:'350px'
  //  bg: `purple.100`,
  },
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})