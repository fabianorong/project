import { useRef } from "react";
import { BACKEND_URL } from "@/lib/Constants";
import { RegisterUserParams } from "@/lib/types";

const useSignupForm = () => {
  const data = useRef<RegisterUserParams>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    data.current = { ...data.current, [name]: value };
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data.current),
      });

      if (!res.ok) throw new Error(res.statusText);

      const response = await res.json();
      alert("User Registered!");
      console.log(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Registration failed: ${error.message}`);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return { data, handleChange, handleSubmit };
};

export default useSignupForm;
