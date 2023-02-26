import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Greeting from './Greeting';
import Prompt from './Prompt';
import { Box, Flex, Link, Icon, Text, Progress, Stack } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io';
import About from './About';
import Projects from './Projects';
import Socials from './Socials';
import Invalid from './Invalid';
import Commands from './Commands';

const CircleIcon = (props) => (
  <Icon
    viewBox='0 0 200 200'
    boxSize={4}
    {...props}>
    <path
      fill='currentColor'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  </Icon>
);

const Window = () => {
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [userPrompt, setUserPrompt] = useState('');
  const [feed, setFeed] = useState([]);

  const printFeed = (component) => {
    setFeed((prev) => [...prev, component]);
  };

  const scrollRef = useRef(null);

  console.log(userPrompt);
  console.log(feed);

  useEffect(() => {
    userPrompt.toLowerCase() === 'clear'
      ? setFeed([])
      : userPrompt.toLowerCase() === 'help'
      ? printFeed(<Commands />)
      : userPrompt.toLowerCase() === 'about'
      ? printFeed(<About setLoading={setLoading} />)
      : userPrompt.toLowerCase() === 'projects'
      ? printFeed(<Projects setLoading={setLoading} />)
      : userPrompt.toLowerCase() === 'socials'
      ? printFeed(<Socials />)
      : userPrompt.length > 1 &&
        (userPrompt.toLowerCase() !== 'about' ||
          userPrompt.toLowerCase() !== 'projects' ||
          userPrompt.toLowerCase() !== 'socials')
      ? setFeed((prev) => [...prev, <Invalid />])
      : null;
  }, [userPrompt]);

  useLayoutEffect(() => {
    if (scrollRef) {
      scrollRef.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <Box
      overflow='hidden'
      borderRadius='8px'
      bg='brand.800'
      border='1px solid'
      borderColor='brand.500'
      width={{ base: '90%', md: '70%', xl: '50%' }}
      height='500px'
      margin='auto'>
      <Flex
        position='relative'
        align='center'
        justify='center'
        bg='brand.700'
        height='24px'
        width='100%'
        py={2}
        px={2}>
        <Flex
          position='absolute'
          left='10px'
          gap='2px'>
          <CircleIcon color='red' />
          <CircleIcon color='yellow' />
          <CircleIcon color='green' />
        </Flex>
        <Link
          display='flex'
          alignItems='center'
          fontSize={{base: '10', md: '13'}}
          color='brand.500'
          gap={1}
          href='https://github.com/sampconrad'
          isExternal>
          <IoLogoGithub size={15} />
          <Text fontWeight={700}>github.com/sampconrad</Text>
        </Link>
      </Flex>
      {loading ? (
        <Progress
          size='xs'
          isIndeterminate
        />
      ) : (
        <Progress size='xs' />
      )}
      <Stack
        ref={scrollRef}
        px='10px'
        pt='20px'
        height='430px'
        justify='space-between'
        overflowY='scroll'>
        <Greeting
          setLoading={setLoading}
          setShowInput={setShowInput}
          showInput={showInput}
        />
        {feed.map((component, index) => (
          <span key={index}>{component}</span>
        ))}
      </Stack>
      {showInput && <Prompt setUserPrompt={setUserPrompt} />}
    </Box>
  );
};

export default Window;
