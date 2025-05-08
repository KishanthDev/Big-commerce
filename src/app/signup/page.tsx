"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import 'react-phone-number-input/style.css'

// Dynamically import to avoid SSR issues
const PhoneInput = dynamic(
    () => import('react-phone-number-input'),
    {
        ssr: false,
        loading: () => <Input placeholder="Loading phone input..." />
    }
)

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)
    const [phone, setPhone] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ email, password, phone })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 relative">
            {/* Logo top-left */}
            <div className="absolute top-6 left-6">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={115}
                    height={115}
                    className="ml-4"
                />
            </div>

            {/* Login button top-right */}

            <div className="absolute top-6 right-6">
                <Link href="/login">
                    <Button variant="outline">Login</Button>
                </Link>
            </div>

            {/* Sign Up Form */}
            <div className="w-full max-w-md bg-white dark:bg-black p-8 dark:border dark:border-gray-500 dark:rounded-xl">
                <h2 className="text-2xl font-bold text-center text-black dark:text-gray-100 mb-1">
                    Start for free
                </h2>
                <p className="text-lg text-center text-gray-500 dark:text-gray-400 mb-6">
                    No credit card required
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2">
                            Work Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@work-email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-5.5 bg-white dark:bg-black dark:text-white dark:border-zinc-700"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2">
                            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                                Password
                            </Label>
                        </div>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="12 characters or more"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="p-5.5 bg-white dark:bg-black dark:text-white dark:border-zinc-700"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute right-2 top-3.5 text-gray-500 dark:text-gray-400"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 mb-2">
                            Mobile Phone Number
                        </Label>
                        <div className="dark:bg-black dark:text-white dark:border-zinc-700 rounded-md overflow-hidden">
                            <PhoneInput
                                international
                                defaultCountry="IN"
                                value={phone}
                                onChange={(value) => setPhone(value || "")}
                                placeholder="Enter phone number"
                                className={`
            !bg-transparent
            !border
            !border-input
            !rounded-md
            !text-sm
            !ring-offset-background
            file:!border-0
            file:!bg-transparent
            file:!text-sm
            file:!font-medium
            placeholder:!text-muted-foreground
            focus-visible:!outline-none
            focus-visible:!ring-2
            focus-visible:!ring-ring
            focus-visible:!ring-offset-2
            disabled:!cursor-not-allowed
            disabled:!opacity-50
            dark:!bg-black
            dark:!text-white
            dark:!border-zinc-700
            !p-2
          `}
                                countrySelectProps={{
                                    className: `
              !absolute
              !left-0
              !top-0
              !h-full
              !border-r
              !border-input
              !bg-transparent
              !text-foreground
              !px-2
              !py-0
              !text-sm
              !rounded-l-md
              dark:!border-zinc-700
            `,
                                }}
                                inputComponent={Input}
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full p-5.5">
                        Sign Up
                    </Button>

                    {/* Separator */}
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">or</div>

                    {/* Sign up with Google */}
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full p-5.5 flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path fill="#4285F4" d="M20.64 12.205q-.002-.958-.164-1.841H12v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615" />
                            <path fill="#34A853" d="M12 21c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.957v2.332A9 9 0 0 0 12 21" />
                            <path fill="#FBBC05" d="M6.964 13.71A5.4 5.4 0 0 1 6.682 12c0-.593.102-1.17.282-1.71V7.958H3.957A9 9 0 0 0 3 12c0 1.452.348 2.827.957 4.042z" />
                            <path fill="#EA4335" d="M12 6.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C16.462 3.891 14.426 3 12 3a9 9 0 0 0-8.043 4.958l3.007 2.332C7.672 8.163 9.656 6.58 12 6.58" />
                        </svg>
                        Sign up with Google
                    </Button>
                </form>
            </div>
        </div>
    )
}