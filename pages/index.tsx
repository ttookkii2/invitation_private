"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    if (!router) return;
    router.push("/240113");
  }, [router]);

  return <div></div>;
}
