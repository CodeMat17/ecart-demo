import { Box, Button, chakra, Input, Text, useToast } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const toast = useToast();
  const [email, setEmail] = useState("matgold@gmail.com");
  const [phone, setPhone] = useState("08063856120");
  const [amount, setAmount] = useState(15200);
  const [format, setFormat] = useState(amount);
  const formattedAmount = format.toLocaleString("en-US");

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100,
    publicKey: "pk_test_01fc1183b5664f5c293f2f729aa4c876f0bfffd6",
  };

  const onSuccess = (reference) => {
    console.log("Successful");
    console.log("ref", reference);
      toast({
        title: "Payment Successful.",
        description: "Thanks for buying with us",
        status: "success",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
  };

  const onClose = () => {
    console.log("Closed");
  };

  const PayStackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <Button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        w='full'
        py='6'
        color='white'
        bgGradient='linear(to-r, #08a4da, blue.400)'
        boxShadow={`0 0 12px 1px #2a7aaf`}
        _hover={{ boxShadow: `0 0 20px 3px #2a7aaf` }}>
        PAY NOW - NGN{formattedAmount}
      </Button>
    );
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <Box
          py='20'
          px='4'
          display='flex'
          flexDir='column'
          alignItems='center'
          justifyContent='center'>
          <Text>PAYSTACK ORDER</Text>
          <Box mt='4' py='6' px='4' shadow='md' maxW='sm'>
            <chakra.form>
              <Input
                mb='4'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your name'
              />

              <Input
                mb='4'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Enter your name'
              />
              <Input
                mb='6'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter your name'
              />
              <PayStackHook />
            </chakra.form>
            <Text mt='6' fontSize='xs' color='gray'>
              Powered by Paystack
            </Text>
          </Box>
        </Box>
      </main>
    </>
  );
}
