import { StarIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const gitHubUser = 'sampconrad';

const Projects = ({ setLoading }) => {
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${gitHubUser}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.filter((repo) => repo.stargazers_count > 0));
      });
  }, []);
  return (
    <>
      <Stack
        spacing={5}
        py={5}>
        {data?.map((repo, index) => (
          <Stack
            spacing={0}
            key={index}>
            <Flex
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
              align='center'
              gap={2}>
              <StarIcon
                boxSize={3}
                color='orange'
              />
              <Text
                fontSize='sm'
                textTransform={'capitalize'}
                py={2}
                color='lightBlue'
                fontWeight='700'>
                {repo.name}:
              </Text>
              <Link
                textDecoration='underline'
                color='darkBlue'
                fontSize='xs'
                href={repo.homepage}
                isExternal>
                <ExternalLinkIcon
                  boxSize={3}
                  mx='4px'
                  color='neonPink'
                />
                {repo.homepage}
              </Link>
            </Flex>
            <Text
              fontSize='xs'
              color='brand.500'>
              {repo.description}
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
          ~/sampconrad/projects
        </Text>
      </Flex>
    </>
  );
};

export default Projects;
