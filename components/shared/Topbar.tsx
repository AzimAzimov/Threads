import React from 'react';
import Link from "next/link";
import Image from "next/image";
import LOGO from "../../public/assets/logo.svg"
import LOGOUT from "../../public/assets/logout.svg"
import {OrganizationSwitcher, SignedIn, SignInButton} from "@clerk/nextjs";
import {dark} from "@clerk/themes";

const Topbar = () => {
  const isUserLoggedIn = true

  return (
    <nav className="topbar">
      <Link href={"/"} className="flex items-center gap-4">
        <Image src={LOGO} alt={'logo'} width={28} height={28} />
        <p className="text-heading1-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignInButton>
              <div className="flex cursor-pointer">
                <Image src={LOGOUT} alt={"logout"} width={24} height={24}/>
              </div>
            </SignInButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4"
            }
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;