import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Greeting = ({ setLoading, setShowInput, showInput }) => {
  const [initialMessages, setInitialMessages] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const printGreeting = async () => {
    await delay(1000);
    setInitialMessages([...initialMessages, 'Welcome!']);
    await delay(500);
    setInitialMessages((prev) => [...prev, 'Starting the server...']);
    setLoading(true);
    await delay(3000);
    setInitialMessages((prev) => [...prev, 'Server ready!']);
    setLoading(false);
    await delay(500);
    setInitialMessages((prev) => [...prev, 'Type any of the following prompts to proceed:']);
    await delay(500);
    setInitialMessages((prev) => [...prev, 'About']);
    await delay(300);
    setInitialMessages((prev) => [...prev, 'Projects']);
    await delay(300);
    setInitialMessages((prev) => [...prev, 'Socials']);
    await delay(500);
    setShowInput(true);
  };

  useEffect(() => {
    printGreeting();
  }, []);

  return (
    <Stack>
      {initialMessages.map((message, index) =>
        index > 3 ? (
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
      {showInput && (
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
      )}
    </Stack>
  );
};

export default Greeting;
