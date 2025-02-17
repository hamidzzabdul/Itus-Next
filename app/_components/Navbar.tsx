import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-center h-[5rem] items-center w-full sticky top-0 z-50 bg-white">
      <div className="w-[90%] flex h-full shadow-sm bg-#F7F8FA items-center justify-between ">
        <h1 className="text-3xl font-semibold ">I-tus</h1>
        <ul className="hidden lg:flex gap-8 items-baseline pt-3">
          <li>
            <Link
              href={"/"}
              className="hover:text-primary_blue transition hover:border-b-2 hover:border-primary_blue duration-300ms text-xl font-semibold "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-primary_blue transition hover:border-b-2 hover:border-primary_blue duration-300ms text-xl font-semibold"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-primary_blue transition hover:border-b-2 hover:border-primary_blue duration-300ms text-xl font-semibold"
            >
              Manage Properties
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-primary_blue transition hover:border-b-2 hover:border-primary_blue duration-300ms text-xl font-semibold"
            >
              Listings
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-primary_blue transition hover:border-b-2 hover:border-primary_blue duration-300ms text-xl font-semibold"
            >
              Contact us
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex gap-3 items-center">
          <Link href={"/login"}>
            <button className="text-lg font-semibold px-4 py-3 bg-blue-100  cursor-pointer rounded-lg hover:bg-blue-500  hover:text-white transition duration-300">
              Login
            </button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="px-6 py-3 bg-blue-500  cursor-pointer rounded-lg hover:-translate-y-2 transform transition-all duration-300 text-white text-lg font-semibold ">
              Sign-up
            </button>
          </Link>
        </div>
        <FaBars className="md:hidden text-3xl cursor-pointer text-black" />
      </div>
    </div>
  );
};

export default Navbar;
