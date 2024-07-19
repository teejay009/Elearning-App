import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const stripePromise = loadStripe("pk_test_51PWJ9W2NbWt1P2RMuZu9eOH45TauiKrDuVOJj47pRnXMMjC5fcnVnLdIAPlp76mkMAWsIRcmh9fC9Vyyi1g75VVt00o2UnvYwl");

const WithdrawalForm = ({ amount, onWithdraw, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    setLoading(true);
    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Mock sending the token to your server (you should implement actual server-side logic here)
    setTimeout(() => {
      console.log("Token received:", token);
      onWithdraw(amount); // Call the onWithdraw function with the withdrawal amount
      setLoading(false);
      onClose(); // Close the modal

      // Show toast notification
      toast.success('Withdrawal successful!', {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button type="submit" isLoading={loading} isDisabled={!stripe || amount <= 0 || loading}>
        Pay $ {amount}.00
      </Button>
    </form>
  );
};

const WithdrawalModal = ({ totalPoints, onWithdraw }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState(0);

  return (
    <>
      <Button onClick={onOpen} disabled={totalPoints === 0}>
        Withdraw Points
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Withdraw Points</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              mb={3}
            />
            <Elements stripe={stripePromise}>
              <WithdrawalForm amount={amount} onWithdraw={onWithdraw} onClose={onClose} />
            </Elements>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer /> {/* Place ToastContainer here to display toast notifications */}
    </>
  );
};

export default WithdrawalModal;
