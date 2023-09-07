'use client'
import React from 'react';
import {sidebarLinks} from '../../constants';
import Link from "next/link";
import Image from "next/image";
import {useRouter, usePathname} from "next/navigation";
import {SignedIn, SignInButton} from "@clerk/nextjs";
import LOGOUT from "../../public/assets/logout.svg";
import * as process from "process";

interface ILeftMenu {
  imgURL: string
  route: string
  label: string
}

const LeftSidebar = () => {
  const router = useRouter()
  const pathName = usePathname()
  console.log(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL)

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link:ILeftMenu) => {
          const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route
          return (
            <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
              <Image src={link.imgURL} alt={link.label} width={24} height={24} />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          )
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignInButton signOutCallback={() => router.push('/sign-in')}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image src={LOGOUT} alt={"logout"} width={24} height={24}/>
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignInButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;