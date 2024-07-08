import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Boards/Dashboard/Dashboard";
import WithdrawalModal from "../../Withdrawal/WithdrawalModal";
import stripePromise from "../../Withdrawal/stripe";
import { Elements } from "@stripe/react-stripe-js";
import "./modal.css"; // Import modal CSS file
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import ArbitrumLogo from "../../../assets/arbitrum-logo.jpeg";
import arbitrum from "../../../assets/Arbitrum.png";

const Dlt = () => {
  const [showModal, setShowModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [quizResult, setQuizResult] = useState({});
  const [paymentError, setPaymentError] = useState(null);

  const [totalScore, setTotalScore] = useState(() => {
    return parseInt(localStorage.getItem("totalScoreDltAfrica")) || 0;
  });

  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  const currentRead = "DLT Africa";
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("totalScoreDltAfrica", totalScore.toString());
  }, [totalScore]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (
        (showModal || showResultModal) &&
        !event.target.closest(".modal-content")
      ) {
        setShowModal(false);
        setShowResultModal(false);
      }
    };

    window.addEventListener("click", handleClickOutsideModal);

    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, [showModal, showResultModal]);

  const QuizData = [
    // Quiz questions and answers data
    {
      question:
        "What fields of technology does DLT Africa focus on educating students in?",
      options: [
        " Frontend development",
        "Blockchain technology",
        " Fullstack development",
        " All of the above ",
      ],
      answer: 3,
    },
    {
      question:
        "Which programming languages are included in DLT Africa's curriculum?",
      options: [
        " HTML, CSS, JavaScript",
        " Python, React, Node.js",
        "Blockchain technologies",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question: "What is the primary mission of DLT Africa?",
      options: [
        "To mine cryptocurrencies",
        "To nurture tech enthusiasts and professionals",
        " To develop social media platforms",
        "To create decentralized exchanges",
      ],
      answer: 1,
    },
    {
      question: "How does DLT Africa ensure practical learning?",
      options: [
        " By focusing on theoretical knowledge",
        "Through hands-on projects and expert guidance",
        "By conducting written exams only",
        "By offering online courses only",
      ],
      answer: 1,
    },
    {
      question:
        "Which of the following skills is NOT covered by DLT Africa's curriculum??",
      options: [
        " Python programming",
        "Blockchain technologies",
        "Artificial Intelligence",
        "React development",
      ],
      answer: 2,
    },
    {
      question: "What is the goal of DLT Africa's training programs?",
      options: [
        "To prepare students for traditional careers only",
        "To equip students with industry-relevant skills",
        " To focus solely on theoretical learning",
        "To train students in ancient programming languages",
      ],
      answer: 1,
    },
    {
      question: "How does DLT Africa prepare students for the tech community?",
      options: [
        " By offering certifications only",
        "By ignoring practical experience",
        "By ensuring they can tackle real-world challenges",
        "By limiting their exposure to hands-on projects",
      ],
      answer: 2,
    },
    {
      question: "What makes DLT Africa's approach to education unique?",
      options: [
        "Their focus on outdated technologies",
        "Their emphasis on practical experience",
        " Their exclusion of blockchain technologies",
        "Their limited course offerings",
      ],
      answer: 1,
    },
    {
      question: "What role does expert guidance play in DLT Africa's programs?",
      options: [
        "It is not included in their curriculum",
        " It ensures students can only learn independently",
        " It provides mentorship and support",
        "It restricts students' creativity",
      ],
      answer: 2,
    },
    {
      question: "How does DLT Africa contribute to the tech landscape?",
      options: [
        " By focusing solely on theoretical education",
        "By ignoring industry trends",
        "By equipping students with essential skills",
        "By limiting practical learning opportunities",
      ],
      answer: 2,
    },
  ];

  const handleAnswerChange = (questionIndex, selectedOptionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOptionIndex,
    });
  };

  const handleSubmit = () => {
    // Logic to evaluate user's answers
    const result = {};
    let score = 0;
    let answeredCount = 0; // Count the number of questions answered

    QuizData.forEach((questionData, index) => {
      const userAnswer = userAnswers[index];
      result[index] = userAnswer === questionData.answer;

      if (result[index]) {
        score += 15; // 5 points for each correct answer
        answeredCount++; // Increment answered count
      }
    });

    const existingTotalScore =
      parseInt(localStorage.getItem("totalScoreDltAfrica")) || 0;

    const newTotalScore = existingTotalScore + score;

    localStorage.setItem("totalScoreDltAfrica", newTotalScore.toString());

    setTotalScore(newTotalScore);
    setTotalQuestionsAnswered(answeredCount);
    setQuizResult(result);
    setShowResultModal(true);
  };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  const handleDeleteTotalPoints = () => {
    localStorage.removeItem("totalScoreDltAfrica");
    setTotalScore(0);
    setTotalQuestionsAnswered(0);
    setQuizResult({});
    setShowResultModal(false);
  };

  const handleWithdraw = (amount) => {
    setTotalScore(totalScore - amount);
    localStorage.setItem(
      "totalScoreDltAfrica",
      (totalScore - amount).toString()
    );
  };

  return (
    <Box
      as="header"
      h="100%"
      minH="100%"
      d="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      backgroundImage={`linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${ArbitrumLogo})`}
      backgroundSize="cover"
      backgroundPosition="center"
      textAlign="center"
    >
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        marginTop="5rem"
      >
        <img
          className="image"
          height="40%"
          width="30%"
          src={arbitrum}
          alt="Arbitrum Logo"
        />

        <Flex
          flexDirection="column"
          alignItems={{ base: "flex-start", md: "flex-end" }}
        >
          <Heading
            as="h2"
            fontSize="2.7rem"
            marginTop="5rem"
            marginBottom="3rem"
            marginRight="30rem"
          >
            What is {currentRead}
          </Heading>

          <Text fontSize="1.2rem" marginRight="2rem" lineHeight="50px">
            DLT Africa is a dynamic tech company dedicated to educating and
            empowering students to excel in various fields of technology.
            Through comprehensive and hands-on training programs, DLT Africa
            offers courses in frontend development, backend development,
            fullstack development, and blockchain technology. Their mission is
            to nurture the next generation of tech enthusiasts and
            professionals, equipping them with the skills and knowledge needed
            to thrive in the rapidly evolving digital landscape. With a focus on
            practical experience and industry-relevant skills,Their curriculum
            covers essential skills like HTML, CSS, JavaScript, React, Node.js,
            Python, and blockchain technologies, providing a holistic learning
            experience. Through hands-on projects and expert guidance, DLT
            Africa ensures students are well-equipped to excel in the
            ever-evolving tech landscape. DLT Africa ensures that students are
            well-prepared to tackle real-world challenges and contribute to the
            tech community.
          </Text>
          <Button
            className="btn"
            padding="1.5rem"
            colorScheme="blue"
            marginTop="5rem"
            marginRight="25rem"
            onClick={handleRefresh}
          >
            Earn more points
          </Button>
          <Button
            className="btn"
            padding="1.5rem"
            colorScheme="red"
            marginTop="2rem"
            marginRight="25rem"
            onClick={handleDeleteTotalPoints}
          >
            Delete Total Points
          </Button>
        </Flex>
      </Flex>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{currentRead}</h2>
            {QuizData.map((questionData, questionIndex) => (
              <div key={questionIndex}>
                <p>
                  {questionIndex + 1}. {questionData.question}
                </p>
                <ul>
                  {questionData.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question_${questionIndex}`}
                          value={optionIndex}
                          onChange={() =>
                            handleAnswerChange(questionIndex, optionIndex)
                          }
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      {showResultModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Results</h2>
            <div>
              <p>Total Result: {totalScore}</p>
              <p>Total Questions Answered: {totalQuestionsAnswered}</p>
            </div>
            {Object.keys(quizResult).map((questionIndex) => (
              <div key={questionIndex}>
                <p>{QuizData[questionIndex].question}</p>
                <p
                  style={{ color: quizResult[questionIndex] ? "green" : "red" }}
                >
                  {quizResult[questionIndex] ? "Correct ✅" : "Incorrect ❌"}
                </p>
                <button>Check Point</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Elements stripe={stripePromise}>
        <WithdrawalModal totalPoints={totalScore} onWithdraw={handleWithdraw} />
      </Elements>

      <Dashboard totalPoints={totalScore} />
    </Box>
  );
};

export default Dlt;
