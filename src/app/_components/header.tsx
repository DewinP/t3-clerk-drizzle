"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const navigation = [
  { name: "Create Post", href: "/create-post" },
];

export default function Example() {

  const {isSignedIn} = useUser()
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
         { !isSignedIn ? 
          <>
          <Link
          href="/sign-in"
          className=" lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
        >
          Log in
        </Link>
        <Link
          href="/sign-up"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign up
        </Link></>
          :
          <UserButton afterSignOutUrl="/sign-in"/>
        }
        </div>
      </nav>
    </header>
  );
}
