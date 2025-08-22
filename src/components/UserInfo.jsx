"use client";
import { useSession } from 'next-auth/react';
import React from 'react'

export default function UserInfo() {
    const session = useSession()
  return (
    <div>{JSON.stringify(session)}</div>
  )
}
