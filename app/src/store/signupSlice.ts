import { create } from "zustand";

interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: {
     firstName: string;
     lastName: string;
  };
}

const useSignUp = create<ISignUp>((set) => ({
   email: "",
   password: "",
   confirmPassword: "",
   fullName: {
      firstName: "",
      lastName: "",
   },
   setEmail: (email: string) => set((state) => ({ ...state, email })),
  setPassword: (password: string) => set((state) => ({ ...state, password })),
  setConfirmPassword: (confirmPassword: string) => set((state) => ({ ...state, confirmPassword })),
  setFullName: (fullName: { firstName: string; lastName: string }) => set((state) => ({ ...state, fullName })),
}));

export default useSignUp;
