import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from 'react-icons/io';

const Socials = () => {
  const data = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sampconrad',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/sampconrad',
    },
    {
      name: 'Email',
      link: 'mailto:sampconrad@gmail.com',
    },
  ];

  return (
    <>
      <Stack
        spacing={5}
        py={5}>
        {data?.map((social, index) => (
          <Stack
            spacing={0}
            key={index}>
            <Flex
              flexWrap={{base: 'wrap', md: 'nowrap'}}
              align='center'
              gap={2}>
              {social.name === 'LinkedIn' ? (
                <IoLogoLinkedin
                  size='16px'
                  color='white'
                />
              ) : social.name === 'GitHub' ? (
                <IoLogoGithub
                  size='16px'
                  color='white'
                />
              ) : (
                <IoMdMail
                  size='16px'
                  color='white'
                />
              )}
              <Text
                fontSize='sm'
                textTransform={'capitalize'}
                py={2}
                color='lightBlue'
                fontWeight='700'>
                {social.name}:
              </Text>
              <Link
                textDecoration='underline'
                color='darkBlue'
                fontSize='xs'
                href={social.link}
                isExternal>
                <ExternalLinkIcon
                  boxSize={3}
                  mx='4px'
                  color='neonPink'
                />
                {social.name === 'Email' ? 'sampconrad@gmail.com' : social.link}
              </Link>
            </Flex>
            <Text
              fontSize='xs'
              color='brand.500'>
              {social.description}
            </Text>
          </Stack>
        ))}
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
          ~/sampconrad/socials
        </Text>
      </Flex>
    </>
  );
};

export default Socials;
