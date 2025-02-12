import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Logo from "./Logo";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NoAccessToCart = () => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Logo>MetroMart.</Logo>
          </div>
          <CardTitle className="text-2xl font-bold font-raleway text-center">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-satoshi">
            Sign in now to access your cart and complete your purchase. Don't
            miss out on your favorite styles, secure them before they're gone!
          </p>
          <SignInButton mode="modal">
            <Button className="w-full font-semibold font-agrandir" size="lg">
              Sign In
            </Button>
          </SignInButton>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="font-satoshi">Don't have an account?</div>
          <SignUpButton mode="modal">
            <Button
              variant="outline"
              className="w-full font-agrandir"
              size="lg"
            >
              Create an account
            </Button>
          </SignUpButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoAccessToCart;
