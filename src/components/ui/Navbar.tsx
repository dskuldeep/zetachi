import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper"
import { buttonVariants } from "./button"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">

                    <Link href="/" className="flex z-40 font-semibold text-2xl md:text-3xl">
                        <span><span className="text-zinc-700">zeta</span><span className="text-blue-600">chi.</span></span>
                    </Link>
                    {/* Add mobile  navbar */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                        <Link href="/waitlist" className={buttonVariants({
                            variant: "ghost",
                            size: "sm"
                        })}> Pricing </Link>
                        <LoginLink href="/waitlist" className={buttonVariants({
                            variant: "ghost",
                            size: "sm"})}>
                                Sign In
                        </LoginLink>

                        <RegisterLink href="/waitlist" className={buttonVariants({
                            size: "sm"})}>
                                Get Started <ArrowRight className="ml-1.5 h-5 w-5"></ArrowRight>
                        </RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar