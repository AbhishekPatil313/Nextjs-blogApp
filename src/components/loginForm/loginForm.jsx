"use client";
import { formlogin } from "@/lib/handlereq";
import styles from "./loginform.module.css";
import { useFormState} from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { Router } from "next/navigation";
const LoginForm = () => {
    const [state , formAction] = useFormState(formlogin, undefined);
    const router = useRouter()
   
  return (
            <form className={styles.form} action={formAction}>
                <input type='text' placeholder='username' name="username"/>
                <input type='password' placeholder='password' name="password"/>
                <button>Login</button>
                {state?.error}
                <Link href="/register">
                   Don't have an account? <b>Register</b>
                </Link>
            </form>
  )
}

export default LoginForm