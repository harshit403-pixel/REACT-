import Input from "../../../shared/components/Input";
import { Lock, Mail, User } from "lucide-react";
import Button from "../../../shared/components/Button";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {

 let{ handleRegisterFormSubmit , register , handleSubmit , errors , navigate ,  } = useAuth()


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md text-center">

                {/* Logo + Heading */}
                <div className="mb-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        ⌁
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Precision ERP
                    </h1>
                    <p className="text-sm text-gray-500">
                        Architectural Intelligence for Global Operations
                    </p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit(handleRegisterFormSubmit)}
                    className="bg-white rounded-2xl shadow-md p-6 text-left"
                >
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                       Register Yourself to get Admin Access
                    </h2>
                    <p className="text-sm text-gray-500 mb-5">
                        Administration Registration
                    </p>

                    {/*Name */}
                    <Input register={register} error={errors.name} name={"name"} rules={{ required: "Name is required" }} type={"text"} placeholder={"Enter your name"} label={"Name"} labelImg={<User />} />
                    {/* Email */}
                    <Input register={register} error={errors.email} name={"email"} rules={{ required: "email is required" }} type={"email"} placeholder={"Enter your email"} label={"Email"} labelImg={<Mail />} />
                    {/* Password */}
                    <Input register={register} error={errors.password} name={"password"} rules={{ required: "password is required", minLength: { value: 6, message: "Atleast 6 chars required" } }} type={"password"} placeholder={"Enter your password"} label={"Password"} labelImg={<Lock />} />

                    {/* Button */}
                    <Button text={"Register "}/>

                    <p className="text-sm text-gray-600">
                       Already have an account{" "}
                        <span 
                        onClick={()=> navigate("/")}
                        className="text-blue-600 cursor-pointer">
                            Login Here
                        </span>
                    </p>

                    {/* Footer */}
                    <div className="flex justify-between mt-6 text-xs text-gray-400">
                        <span>AES-256 ENCRYPTED</span>
                        <span>MULTI-FACTOR READY</span>
                    </div>
                </form>

                {/* Bottom Footer */}
                <p className="text-xs text-gray-400 mt-6">
                    © 2024 Precision Architectural Intelligence. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;