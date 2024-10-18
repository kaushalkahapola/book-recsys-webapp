"use client";

import SignInPageComponent from "@/app/_components/SignIn";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { data: session } = useSession();
  const router = useRouter();
  React.useEffect(() => {
    if (session && session.user) {
      console.log("user", session.user);
      router.push(`/user/${session.user.id}/recommendations`);
    } else {
      console.log(session)
    }
  }, [session, router])
  
  return <SignInPageComponent />;
}