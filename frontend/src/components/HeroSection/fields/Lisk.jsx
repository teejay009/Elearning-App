import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Boards/Dashboard/Dashboard";
import WithdrawalModal from "../../Withdrawal/WithdrawalModal";
import stripePromise from "../../Withdrawal/stripe";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Button, Heading, Text, Flex, CloseButton } from "@chakra-ui/react";
import ArbitrumLogo from "../../../assets/arbitrum-logo.jpeg";
import arbitrum from "../../../assets/Ethereum.png";

const Lisk = () => {
  const [showModal, setShowModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [quizResult, setQuizResult] = useState({});
  const [paymentError, setPaymentError] = useState(null);
  const navigate = useNavigate();

  const [totalScore, setTotalScore] = useState(() => {
    return parseInt(localStorage.getItem("totalScoreLisk")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("totalScoreLisk", totalScore.toString());
  }, [totalScore]);

  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  const currentRead = "Lisk";

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
      question: "What is Ethereum?",
      options: [
        "A cryptocurrency",
        "A blockchain scaling solution",
        "A decentralized exchange",
        "A smart contract platform",
      ],
      answer: 3,
    },
    {
      question: "Who invented Bitcoin?",
      options: [
        "Satoshi Nakamoto",
        "Vitalik Buterin",
        "Charlie Lee",
        "Hal Finney",
      ],
      answer: 0,
    },
    {
      question: "What is the maximum supply of Bitcoin?",
      options: [
        "21 million BTC",
        "100 million BTC",
        "1 billion BTC",
        "Unlimited",
      ],
      answer: 0,
    },
    {
      question: "What consensus mechanism does Bitcoin use?",
      options: [
        "Proof of Work (PoW)",
        "Proof of Stake (PoS)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)",
      ],
      answer: 0,
    },
    {
      question: "What is the function of a cryptocurrency wallet?",
      options: [
        "To exchange cryptocurrencies",
        "To store private keys",
        "To mine new coins",
        "To execute smart contracts",
      ],
      answer: 1,
    },
    {
      question: "What is a decentralized autonomous organization (DAO)?",
      options: [
        "A type of cryptocurrency",
        "A form of smart contract",
        "An organization governed by its members through code",
        "A consensus algorithm",
      ],
      answer: 2,
    },
    {
      question: "What does ICO stand for in the context of cryptocurrency?",
      options: [
        "Initial Coin Offering",
        "International Cryptocurrency Organization",
        "Independent Crypto Operators",
        "Initial Centralized Offering",
      ],
      answer: 0,
    },
    {
      question:
        "What is the purpose of a whitepaper in the cryptocurrency space?",
      options: [
        "To explain the technology behind a project",
        "To outline a project's marketing strategy",
        "To provide legal advice",
        "To predict future cryptocurrency prices",
      ],
      answer: 0,
    },
    {
      question: "What is the role of a blockchain node?",
      options: [
        "To validate transactions and maintain the network",
        "To mine new cryptocurrency",
        "To act as a cryptocurrency wallet",
        "To create smart contracts",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of a private key in cryptocurrency?",
      options: [
        "To access a cryptocurrency exchange",
        "To identify the owner of a cryptocurrency wallet",
        "To validate transactions on the blockchain",
        "To execute smart contracts",
      ],
      answer: 1,
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
      parseInt(localStorage.getItem("totalScoreLisk")) || 0;

    const newTotalScore = existingTotalScore + score;

    localStorage.setItem("totalScoreLisk", newTotalScore.toString());

    setTotalScore(newTotalScore);
    setTotalQuestionsAnswered(answeredCount);
    setQuizResult(result);
    setShowResultModal(true);
  };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  const handleWithdraw = (amount) => {
    const newTotalScore = totalScore - amount;
    setTotalScore(newTotalScore);
    localStorage.setItem("totalScoreLisk", newTotalScore.toString());
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
            Lisk is a blockchain application platform that enables developers
            to build, publish, distribute, and monetize decentralized
            applications (dApps) on their blockchain network. Launched in early
            2016 by Max Kordek and Oliver Beddows, Lisk aims to make blockchain
            technology more accessible by providing developers with a
            user-friendly ecosystem and tools to deploy custom blockchains and
            sidechains. One of the key features of Lisk is its use of
            sidechains, which are independent blockchains linked to the main
            Lisk blockchain. This architecture allows developers to create
            scalable and customizable blockchain applications without affecting
            the performance of the main network. Developers can use JavaScript,
            one of the most widely used programming languages, to build dApps on
            the Lisk platform. This lowers the entry barrier for developers who
            are already familiar with JavaScript and want to explore blockchain
            technology. Lisk also provides a Software Development Kit (SDK) and
            comprehensive documentation to help developers get started with
            building decentralized applications. Overall, Lisk aims to foster
            innovation in the blockchain space by empowering developers to
            create and deploy blockchain applications easily and efficiently.
          </Text>
          <Button
            className="btn"
            padding="1.5rem"
            colorScheme="blue"
            marginTop="5rem"
            marginRight="25rem"
            onClick={() => setShowModal(true)}
          >
            Earn more points
          </Button>
        </Flex>
      </Flex>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <CloseButton
              position="absolute"
              right="1rem"
              top="1rem"
              onClick={() => setShowModal(false)} // Close modal when cancel button is clicked
            />
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
            <CloseButton
              position="absolute"
              right="1rem"
              top="1rem"
              onClick={() => setShowResultModal(false)} // Close modal when cancel button is clicked
            />
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

export default Lisk;
