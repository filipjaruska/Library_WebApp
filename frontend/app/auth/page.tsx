'use client';
import { useState } from 'react';
import styles from './LoginPage.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import Link from 'next/link';

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const result = loginSchema.safeParse({
            email: email,
            password: password,
        });

        if (!result.success) {
            setErrorMessage(result.error.errors.map((err) => err.message).join(', '));
            return;
        }

        const signInResult = await signIn('credentials', {
            redirect: false,
            identifier: email,
            password: password,
        });

        if (!signInResult!.error) {
            router.push('/dashboard');
        } else {
            setErrorMessage(signInResult!.error);
        }
    };

    return (
        <main>
            <div className={styles.loginContainer}>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div>{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}</div>
                    <label>
                        Email
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Sign in</button>
                </form>
                <p><Link href={'/auth/register'}>Do not have an account yet?</Link></p>
                <div>
                    <p>---or login with---</p>
                    <button >Github</button>
                </div>
            </div>
        </main>
    );
}