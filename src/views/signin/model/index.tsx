import { ReactNode } from "react";

export interface AuthCardProps {
  children: ReactNode;
}

export interface FormData {
  email: string,
  password: string,
}

export interface Errors {
  email: string,
  password: string,
}