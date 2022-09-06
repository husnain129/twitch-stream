import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const Auth_Credentials = {
  email: "admin@gmail.com",
  password: "admin",
};

function LoginModal({ isModalOpen, closeModal, setIsSignedIn }) {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();

  const handleLoginSubmit = () => {
    if (
      auth.email === Auth_Credentials.email &&
      auth.password === Auth_Credentials.password
    ) {
      setIsSignedIn(true);
      closeModal();
    } else {
      toast({
        title: "Invalid Credentials",
        description: "Please enter valid credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                value={auth.email}
                type="email"
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                id="email"
              />
              <FormLabel mt=".5em">Password</FormLabel>
              <Input
                value={auth.password}
                onChange={(e) => setAuth({ ...auth, password: e.target.value })}
                type="password"
                id="password"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button
              onClick={handleLoginSubmit}
              type="button"
              variant="solid"
              colorScheme={"green"}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
