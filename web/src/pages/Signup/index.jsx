import { Icon, Input } from "~/components"

export const Signup = () => {

    return ( 
        <div>

            <header className="p-4 border-b border-red-300 ">
                <div className="container max-w-xl flex justify-center">
                    <img src="/img/logo/logo-fundo-branco.svg" alt="logo" className="w-32 md:w-40" />
                </div>
            </header>

            <main className="container max-w-xl p-4">
                <div className="p-4 flex space-x-4 items-center">

                    <a href="/">
                        <Icon name="arrowLeft" className="h-6"/>
                    </a>
                    <h2 className="text-xl font-bold">Crie sua conta</h2>
                </div>
                <form action="" className="p-4 space-y-6">
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder="Digite seu nome"
                    />

                    <Input
                        type="text"
                        name="username"
                        label="Seu nome de usuário"
                        placeholder="Digite seu usuário"
                    />

                    <Input
                        type="email"
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu e-mail"
                    />

                    <Input
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder="Digite sua senha"
                    />

                    <a href="/dashboard" className="w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">Entrar</a>
                </form>
            </main>

        </div>
    )
}