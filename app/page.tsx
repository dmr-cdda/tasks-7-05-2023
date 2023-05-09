"use client"; // this is a client component
import UserBrowserRecognition from "@/components/UserBrowserRecognition";
import UserIpAddress from "@/components/UserIpAddress";
import UserLocation from "@/components/UserLocation";
import UserTime from "@/components/UserTime";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <UserTime />
      <UserIpAddress />
      <UserLocation />
      <UserBrowserRecognition/>
    </main>
  )
}
