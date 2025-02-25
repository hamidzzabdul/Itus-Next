import lognpic from "@/app/_assets/login.png";
import SignUpForm from "@/app/_components/forms/signupForm";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="w-[90%] lg:-[70%] h-screen mx-auto flex justify-center items-center">
      <div className="hidden md:w-1/2 lg:w-1/3 h-[85%] md:flex overflow-hidden rounded-tl-lg rounded-bl-lg ">
        <Image
          src={lognpic}
          alt="login image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/4 lg:w-[40%] h-[85%] overflow-scroll pt-6 rounded-tr-lg rounded-br-lg flex justify-center">
        <div className="w-[90%] flex flex-col gap-6 ">
          <h1 className="text-3xl font-semibold font-primary">Register</h1>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
