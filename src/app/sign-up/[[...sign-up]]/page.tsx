import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return <div>
    <SignUp signInUrl="/sign-in"/>;
  </div>
}
