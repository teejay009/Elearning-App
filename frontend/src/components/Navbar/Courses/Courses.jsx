import React from "react";
import { Box, Image, Text, Flex, Button, Container, SimpleGrid } from "@chakra-ui/react";
import webDesignImg from "../../../assets/web-design.png";
import graphicsDesignImg from "../../../assets/graphics-design.png";
import uiUxImg from "../../../assets/ui-ux.png";

const CourseCard = ({ item }) => {
  const { imgUrl, title, lesson, students, rating } = item;

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Image src={imgUrl} alt={title} borderRadius="md" mb={4} />
      <Text fontSize="lg" fontWeight="semibold" mb={2}>{title}</Text>
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontSize="sm" fontWeight="medium">
          <i className="ri-book-open-line"></i> {lesson} Lessons
        </Text>
        <Text fontSize="sm" fontWeight="medium">
          <i className="ri-user-line"></i> {students}K
        </Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text fontSize="sm" fontWeight="medium">
          <i className="ri-star-fill"></i> {rating}K
        </Text>
        <Text fontSize="sm" fontWeight="medium">
          <a href="#"> Enroll Now</a>
        </Text>
      </Flex>
    </Box>
  );
};

const Courses = () => {
  const coursesData = [
    {
      id: "01",
      title: "Web Design BootCamp-2022 for Beginners",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: webDesignImg,
    },
    {
      id: "02",
      title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: graphicsDesignImg,
    },
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: uiUxImg,
    },
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: uiUxImg,
    },
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: uiUxImg,
    },
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: uiUxImg,
    },
  ];

  return (
    <Container maxW="container.xl" mt={10}>
      <Flex justify="space-between" align="center" mb={5}>
        <Box>
          <Text fontSize="2xl" fontWeight="semibold">Our Popular Courses</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur libero quod voluptatibus ullam quia quas, vitae voluptatem recusandae reprehenderit!</Text>
        </Box>
        <Button colorScheme="teal">See All</Button>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5}>
        {coursesData.map((item) => (
          <CourseCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Courses;
