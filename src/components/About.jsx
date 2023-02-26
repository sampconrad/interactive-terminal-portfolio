import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const About = ({ setLoading }) => {
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/sampconrad')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        console.log(data)
      });
  }, []);

  return (
    <>
      <Flex
        align='center'
        flexDirection={{ base: 'column', md: 'row' }}
        px={{ base: '2', md: '10' }}
        py={5}
        gap={5}>
        <Avatar
          size='xl'
          name={data?.name}
          src={data?.avatar_url}
        />
        <Stack spacing={0}>
          <Text
            fontSize='2xl'
            color='brightYellow'
            fontWeight={700}>
            Conrado Sampaio
          </Text>
          <Text
            fontSize='sm'
            color='neonGreen'>
            Front-End Developer & UX Designer
          </Text>
          <Text
            fontSize='xs'
            color='brand.500'>
            Conrado is a former LL.B turned Dev, who ditched a career in Law for a keyboard and a
            Stackoverflow account, which he puts to good use bringing streamlined user-focused
            projects to life.
          </Text>
        </Stack>
      </Flex>
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
          ~/sampconrad/about
        </Text>
      </Flex>
    </>
  );
};

export default About;
