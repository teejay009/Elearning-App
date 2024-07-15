import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Boards/Dashboard/Dashboard";
import WithdrawalModal from "../../Withdrawal/WithdrawalModal";
import stripePromise from "../../Withdrawal/stripe";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Button, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import "./modal.css";
import ArbitrumLogo from "../../../assets/arbitrum-logo.jpeg";
import arbitrum from "../../../assets/Arbitrum.png";

const CeloAfrica = () => {
  const [showModal, setShowModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [quizResult, setQuizResult] = useState({});
  const [paymentError, setPaymentError] = useState(null);
  const [earnPointsClicked, setEarnPointsClicked] = useState(false);
  const [totalScore, setTotalScore] = useState(() => {
    return parseInt(localStorage.getItem("totalScoreCeloAfrica")) || 0;
  });
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  const currentRead = "Celo Africa";
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("totalScoreCeloAfrica", totalScore.toString());
  }, [totalScore]);

  const handleEarnPointsClick = () => {
    setEarnPointsClicked(true);
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  };

  const handleAnswerChange = (questionIndex, selectedOptionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOptionIndex,
    });
  };

  const handleSubmit = () => {
    const result = {};
    let score = 0;
    let answeredCount = 0;

    QuizData.forEach((questionData, index) => {
      const userAnswer = userAnswers[index];
      result[index] = userAnswer === questionData.answer;

      if (result[index]) {
        score += 15;
        answeredCount++;
      }
    });

    const existingTotalScore =
      parseInt(localStorage.getItem("totalScoreCeloAfrica")) || 0;

    const newTotalScore = existingTotalScore + score;

    localStorage.setItem("totalScoreCeloAfrica", newTotalScore.toString());

    setTotalScore(newTotalScore);
    setTotalQuestionsAnswered(answeredCount);
    setQuizResult(result);
    setShowResultModal(true);
  };

  const handleRefresh = () => {
    if (earnPointsClicked) {
      setShowModal(true);
    } else {
      window.location.reload();
    }
  };

  const handleWithdraw = (amount) => {
    setTotalScore(totalScore - amount);
    localStorage.setItem("totalScoreCeloAfrica", (totalScore - amount).toString());
  };

  const handleCancelModal = () => {
    setShowModal(false);
    setUserAnswers({});
  };

  const QuizData = [
    {
      question: "What is the primary focus of the Celo blockchain platform?",
      options: [
        "A cryptocurrency",
        "A blockchain scaling solution",
        "A decentralized exchange",
        "A platform for increasing accessibility to financial services via mobile devices",
      ],
      answer: 3,
    },
    {
      question: "What native token does the Celo platform use?",
      options: [
        "Bitcoin (BTC)",
        "Ether (ETH)",
        "Celo Dollar (cUSD)",
        "Celo (CELO)",
      ],
      answer: 3,
    },
    {
      question: "What is the stablecoin associated with the Celo platform?",
      options: [
        "Tether (USDT)",
        "USD Coin (USDC)",
        "Celo Dollar (cUSD)",
        "DAI",
      ],
      answer: 2,
    },
    {
      question: "What consensus mechanism does the Celo blockchain use?",
      options: [
        "Proof of Work (PoW)",
        "Proof of Stake (PoS)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)",
      ],
      answer: 1,
    },
    {
      question: "What is the function of the Valora wallet in the Celo ecosystem?",
      options: [
        "To exchange cryptocurrencies",
        "To store private keys",
        "To send and receive payments easily using a mobile phone",
        "To execute smart contracts",
      ],
      answer: 2,
    },
    {
      question: "What is a key goal of the Celo Foundation?",
      options: [
        "To create a decentralized social media platform",
        "To make financial tools accessible to anyone with a mobile phone",
        "To develop decentralized applications (dApps)",
        "To mine new cryptocurrencies",
      ],
      answer: 1,
    },
    {
      question: "What does Celo use to maintain the value of its stablecoins?",
      options: [
        "Algorithmic adjustments",
        "Collateralized assets",
        "Fiat reserves",
        "A combination of cryptocurrencies and algorithmic adjustments",
      ],
      answer: 3,
    },
    {
      question: "What is the purpose of the Celo Alliance for Prosperity?",
      options: [
        "To promote the use of Celo for gaming",
        "To develop smart contract standards",
        "To bring together organizations committed to driving social impact using blockchain technology",
        "To create a marketplace for NFTs",
      ],
      answer: 2,
    },
    {
      question: "What is the role of a validator in the Celo network?",
      options: [
        "To validate transactions and maintain the network",
        "To mine new cryptocurrency",
        "To act as a cryptocurrency wallet",
        "To create smart contracts",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of Celo’s phone number mapping feature?",
      options: [
        "To link a user's phone number with their email",
        "To associate a phone number with a user's cryptocurrency wallet",
        "To provide a contact list for social networking",
        "To enable two-factor authentication",
      ],
      answer: 1,
    },
  ];

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
            Celo is a complete stack of new blockchain
            software, core libraries that run on that blockchain, and end-user
            applications including a Wallet app that communicate with that
            logic.A blockchain or cryptographic network is a broad term used to
            describe a database maintained by a distributed set of computers
            that do not share a trust relationship or common ownership. This
            arrangement is referred to as decentralized. The content of a
            blockchain's database, or ledger, is authenticated using
            cryptographic techniques, preventing its contents from being added
            to, edited or removed except according to a protocol operated by the
            network as a whole. The code of the Celo Blockchain has shared
            ancestry with Ethereum, blockchain software for building
            general-purpose decentralized applications. Celo differs from
            Ethereum in several important areas as described in the following
            sections. However, it inherits a number of key concepts.The
            blockchain is updated by a protocol that takes the current state of
            the ledger, applies a number of transactions in turn, each of which
            may execute code and result in updates to the global state. This
            creates a new block that consists of a header, identifying the
            previous block and other metadata, and a data structure that
            describes the new state.
          </Text>
          <Button
            className="btn"
            padding="1.5rem"
            colorScheme="blue"
            marginTop="5rem"
            marginRight="25rem"
            onClick={handleEarnPointsClick}
          >
            Earn more points
          </Button>
          
        </Flex>
      </Flex>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close modal"
              onClick={handleCancelModal}
              className="modal-close-btn"
            />
            <h2>{currentRead} Quiz</h2>
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
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      )}

      {showResultModal && (
        <div className="modal">
          <div className="modal-content">
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close modal"
              onClick={() => setShowResultModal(false)}
              className="modal-close-btn"
            />
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

export default CeloAfrica;
