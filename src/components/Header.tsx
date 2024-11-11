"use client";

import Button, { ButtonType } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SideModal from "./SideModal";
import { useDispatch } from "react-redux";
import { toggleSideModal } from "@/app/state/features/modal/modal.slice";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Container from "./Container";

/* ============================== Headers Start ==================================== */

const Header = () => {
    const dispatch = useDispatch();

    const router = useRouter();

    const handleNavigate = () => {
        router.push("/calculator");
    };

    return (
        <header className='bg-white shadow-md'>
            <Container>
                <nav
                    aria-label='Global'
                    className='mx-auto flex items-center justify-between py-5'
                >
                    {/* ================================================================== */}

                    {/* Logo Section */}
                    <div className='flex lg:flex-1'>
                        <a href='#' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Vine Mobility</span>
                            <div className=''>
                                <Image
                                    alt='Vine Mobility Logo'
                                    src='/vine-mobility/logo.png'
                                    className='h-10 md:h-[50px] w-auto'
                                    height={150}
                                    width={200}
                                />
                            </div>
                        </a>
                    </div>

                    {/* ================================================================== */}
                    {/* Mobile Menu Button */}
                    <div className='flex lg:hidden'>
                        <button
                            type='button'
                            onClick={() => dispatch(toggleSideModal())}
                            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                        >
                            <span className='sr-only'>Open main menu</span>
                            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
                        </button>
                    </div>

                    {/* ================================================================== */}
                    {/* Desktop navigation menu */}
                    <div className='hidden text-sm lg:flex lg:gap-x-16 mr-7'>
                        <Link href='/'>
                            <span className='font-semibold hover:text-primary-main leading-6 text-gray-900'>
                                Home
                            </span>
                        </Link>

                        <a
                            href='#proposition'
                            className='hover:text-primary-main font-medium leading-6 text-gray-900'
                        >
                            Why Vine Mobility?
                        </a>
                        <a
                            href='#testimonial'
                            className='hover:text-primary-main font-semibold leading-6 text-gray-900'
                        >
                            What Are People Saying?
                        </a>
                    </div>

                    {/* ================================================================== */}
                    {/* Desktop Button */}
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                        <Button
                            fn={handleNavigate}
                            type={ButtonType.green}
                            // textSize='text-[12px]'
                            // width="px-[60px]"
                            text='EV Calculator'
                        />
                    </div>
                </nav>
            </Container>

            {/* ================================================================== */}
            {/* Mobile Menu (Dialog) */}
            {/* <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Vine Mobility</span>
              <img
                alt="Vine Mobility Logo"
                src="/vine-mobility/logo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}

            <SideModal />
            {/* ================================================================== */}
        </header>
    );
};

{
    /* ============================== Headers end==================================== */
}

export default Header;
