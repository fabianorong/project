import { Button } from "@/components/Button";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import useSignupForm from "@/hooks/useSignupForm";

const SignupForm = () => {
  const { handleChange, handleSubmit } = useSignupForm();

  return (
    <div className="m-2 border rounded overflow-hidden shadow">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">
        Sign up
      </div>
      <div className="p-2 flex flex-col gap-6">
        <InputBox
          name="name"
          labelText="Name"
          autoComplete="off"
          required
          onChange={handleChange}
        />
        <InputBox
          name="email"
          labelText="Email"
          required
          onChange={handleChange}
        />
        <InputBox
          name="password"
          labelText="Password"
          type="password"
          required
          onChange={handleChange}
        />
        <div className="flex justify-center items-center gap-2">
          <Button onClick={handleSubmit}>Submit</Button>
          <Link href="/">Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
