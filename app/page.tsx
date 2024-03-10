"use client";

import { lusitana } from './ui/font';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './ui/button';
import LoginLogo from './ui/logo';

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
           <LoginLogo />
          </div>
        <form className="rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} text-2xl text-center mb-3`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-none placeholder-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-none placeholder-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
          <LoginButton />
          <div className="flex justify-center mt-4">
            {/* Add form errors here */}
          </div>
        </form>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}


