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
import StripeCheckout from "react-stripe-checkout";

const Arbitrum = () => {
  const [showModal, setShowModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [quizResult, setQuizResult] = useState({});
  const [paymentError, setPaymentError] = useState(null);

  const [totalScore, setTotalScore] = useState(() => {
    return parseInt(localStorage.getItem("totalScoreArbitrum")) || 0;
  });

  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  const currentRead = "Arbitrum";
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("totalScoreArbitrum", totalScore.toString());
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
      question: "What is Arbitrum?",
      options: ["A cryptocurrency","A blockchain scaling solution","A decentralized exchange", "A smart contract platform",],
      answer: 1
    },
    {
      question: "Who developed Arbitrum?",
      options: ["Ethereum Foundation","Solana Labs","Offchain Labs", "Binance",],
      answer: 2
    },
    {
      question: "What is the primary use case of Arbitrum Rollup?",
      options: [ "Decentralized identity","Cross-chain interoperability", "Scalable smart contracts","Proof of stake consensus"],
      answer: 2
    },
    {
      question: "Which consensus mechanism does Arbitrum use?",
      options: [ "Proof of Work (PoW)", "Proof of Stake (PoS)", "Delegated Proof of Stake (DPoS)", "Optimistic Rollup"],
      answer: 3
    },
    {
      question: "What is the main advantage of using Arbitrum?",
      options: [
        "Low transaction fees",
        "High throughput",
        "Decentralized governance",
        "Advanced privacy features"
      ],
      answer: 1
    },
    {
      question: "Which programming language is commonly used to write smart contracts on Arbitrum?",
      options: [
        "Solidity",
        "Python",
        "Java",
        "Go"
      ],
      answer: 0
    },
    {
      question: "What is the role of the Arbitrum sequencer?",
      options: [
        "Generating random numbers",
        "Aggregating transactions",
        "Executing smart contracts",
        "Verifying transactions"
      ],
      answer: 1
    },
    {
      question: "Which Ethereum Improvement Proposal (EIP) introduced the concept of rollups?",
      options: [
        "EIP-1559",
        "EIP-1965",
        "EIP-1962",
        "EIP-2929"
      ],
      answer: 2
    },
    {
      question: "What is the purpose of the dispute period in Arbitrum?",
      options: [
        "To finalize transactions",
        "To challenge potentially invalid transactions",
        "To incentivize validators",
        "To upgrade the protocol"
      ],
      answer: 1
    },
    {
      question: "What role do validators play in the Arbitrum network?",
      options: [
        "Verifying transactions",
        "Executing smart contracts",
        "Proposing new blocks",
        "Aggregating transactions"
      ],
      answer: 0
    },
    {
      question: "Which layer of the Ethereum network does Arbitrum operate on?",
      options: [
        "Layer 1",
        "Layer 2",
        "Layer 3",
        "Layer 4"
      ],
      answer: 1
    }
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
      parseInt(localStorage.getItem("totalScoreArbitrum")) || 0;

    const newTotalScore = existingTotalScore + score;

    localStorage.setItem("totalScoreArbitrum", newTotalScore.toString());

    setTotalScore(newTotalScore);
    setTotalQuestionsAnswered(answeredCount);
    setQuizResult(result);
    setShowResultModal(true);
  };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  const handleDeleteTotalPoints = () => {
    localStorage.removeItem("totalScoreArbitrum");
    setTotalScore(0);
    setTotalQuestionsAnswered(0);
    setQuizResult({});
    setShowResultModal(false);
  };

  const handleWithdraw = (amount) => {
    setTotalScore(totalScore - amount);
    localStorage.setItem("totalScoreArbitrum", (totalScore - amount).toString());
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
            Arbitrum is a layer 2 solution designed to improve the capabilities
            of Ethereum smart contracts — boosting their speed and scalability,
            while adding in additional privacy features to boot. The platform is
            designed to allow developers to easily run unmodified Ethereum
            Virtual Machine (EVM) contracts and Ethereum transactions on a
            second layer, while still benefiting from Ethereum's excellent layer
            1 security. It’s built to address some of the shortcomings of
            current Ethereum-based smart contracts — such as poor efficiency and
            high execution costs — which have damaged the Ethereum user
            experience and frequently make transacting an expensive task.
            Arbitrum uses a technique known as optimistic rollups. Transactions
            are executed off-chain, before being bundled in large batches and
            submitted on the Ethereum mainnet as calldata. This process helps to
            offload most of the computational and storage burden Ethereum
            currently suffers from, by moving them off-chain. Each batch incurs
            fixed transaction costs on Ethereum, which are spread across each
            transaction on Arbitrum, lowering the cost for end-users. Off-chain
            transactions are assumed to be valid, hence the name "optimistic,"
            and there is a challenge period for anyone to dispute the
            transaction by posting a fraud proof. New York-based development
            firm Offchain Labs is currently building the Arbitrum product
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
                <p>
                  {QuizData[questionIndex].question}
                </p>
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

export default Arbitrum;
