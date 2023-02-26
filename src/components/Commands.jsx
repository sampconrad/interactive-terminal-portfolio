import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Commands = () => {
  const data = ['Type any of the following prompts to proceed:', 'About', 'Projects', 'Socials'];

  return (
    <>
      <Stack py={5}>
        {data?.map((message, index) =>
          index > 0 ? (
            <Text
              py={2}
              ml={2}
              fontSize='sm'
              color='lightBlue'
              fontWeight='700'
              key={index}>
              <ChevronRightIcon
                boxSize={6}
                color='brightYellow'
              />
              {message}
            </Text>
          ) : (
            <Text
              fontSize='sm'
              color='brand.100'
              key={index}>
              {message}
            </Text>
          )
        )}
      </Stack>
      <Flex
        py={5}
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
    </>
  );
};

export default Commands;
