'use client'

import { Link } from '@chakra-ui/next-js'
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        '/hero-background.webp'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        <Text
            color={'gold'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Fine Gold Barber Style
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Cortes de cabello y barba, cejas, diseños, marcado, limpieza facial, depilación, y más.
          </Text>
          <Stack direction={'row'}>
            <Link
              href={'/citas'}
              p={2}
              fontWeight={500}
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{
                textDecoration: 'none',
                bg: 'blue.500'
              }}>
              Agendar una cita
            </Link>

            <Link
              href={'/contacto'}
              p={2}
              fontWeight={500}
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{
                textDecoration: 'none',
                bg: 'whiteAlpha.500'
              }}>
              Contactar
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}