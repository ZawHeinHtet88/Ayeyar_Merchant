import { LoginForm } from "../components/ui/login-form";

export default function LoginPage() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 flex-col from-primary to-primary/70 bg-gradient-to-br">
            <h1 className="mb-10 text-3xl font-bold text-white">Ayeyar Marketplace</h1>
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}
