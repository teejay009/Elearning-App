import React from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';

const Dashboard = ({ totalPoints, totalQuestionsAnswered }) => {
  return (
    <Box className="dashboard" p="20px">
      {/* <Heading as="h2" fontSize="24px" mb="20px">Dashboard</Heading> */}
      <Flex className="dashboard-container" justifyContent="space-between" gap="10px" mb="4rem">
        <Box className="dashboard-cont" flex="0 0 calc(20% - 20px)" bgColor="#f0f0f0" p="15px" borderRadius="8px" textAlign="center" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" transition="box-shadow 0.3s ease-in-out" _hover={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <Heading as="h3" fontSize="24px" color='#023047' mb="10px">{totalPoints}</Heading>
          <Text fontSize="14px" color="#023047">Total Points</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
