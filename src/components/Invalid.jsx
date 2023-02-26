import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Invalid = () => {
  return (
    <Stack>
      <Flex
        pt={5}
        align='center'
        gap={2}>
        <Text
          fontSize='sm'
          color='red'>
          Unrecognized command. Please, try again.
        </Text>
      </Flex>
      <Flex
        pb={5}
        align='center'
        gap={2}>
        <Text
          fontSize='sm'
          color='brightYellow'>
          # user
        </Text>
        <Text
          fontSize='sm'
          color='darkBlue'>
          {' '}
          in
        </Text>
        <Text
          fontSize='sm'
          color='neonPink'>
          {' '}
          ~/sampconrad
        </Text>
      </Flex>
    </Stack>
  );
};

export default Invalid;
