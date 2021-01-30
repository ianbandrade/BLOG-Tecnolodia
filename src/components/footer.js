import React from "react"
import { Box, Center, Text, Flex, Spacer } from "@chakra-ui/react"
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io"

const Footer = () => {
  return (
    <Box bgColor="#edf2f7">
      <Center>
        <Flex>
          <IoLogoInstagram />
          <Spacer />
          <IoLogoLinkedin />
          <Spacer />
          <IoLogoGithub />
          <Spacer />
          <Text fontSize="md">/ianbandrade</Text>
        </Flex>
      </Center>
    </Box>
  )
}

export default Footer
