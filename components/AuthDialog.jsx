'use client';

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const LoginForm = ({ onSwitchToSignup }) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
    <Button className="w-full">Login</Button>
    <p className="text-center text-sm">
      Don't have an account?{" "}
      <Button variant="link" onClick={onSwitchToSignup}>
        Sign up
      </Button>
    </p>
  </div>
);

const SignupForm = ({ onSwitchToLogin }) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" placeholder="Enter your name" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Create a password" />
    </div>
    <Button className="w-full">Sign up</Button>
    <p className="text-center text-sm">
      Already have an account?{" "}
      <Button variant="link" onClick={onSwitchToLogin}>
        Log in
      </Button>
    </p>
  </div>
);

export const AuthDialog = ({ isOpen, onOpenChange, initialView }) => {
  const [view, setView] = useState(initialView);

  const switchToSignup = () => setView('signup');
  const switchToLogin = () => setView('login');

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{view === 'login' ? 'Login' : 'Sign Up'}</DialogTitle>
          <DialogDescription>
            {view === 'login' 
              ? 'Enter your credentials to access your account.' 
              : 'Create a new account to get started.'}
          </DialogDescription>
        </DialogHeader>
        {view === 'login' 
          ? <LoginForm onSwitchToSignup={switchToSignup} />
          : <SignupForm onSwitchToLogin={switchToLogin} />
        }
      </DialogContent>
    </Dialog>
  );
};
