import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'

import { Icon, Input } from "~/components"

const validationSchema = yup.object().shape({
    name: yup.string().required('Preencha seu nome.'),
    username: yup.string().required('Preencha seu nome de usuário.'),
    email: yup.string().email('Informe um e-mail válido.').required('Informe seu e-mail.'),
    password: yup.string().required('Digite uma senha.'),
})

export const Signup = () => {

    const [auth, setAuth] = useLocalStorage('auth', {})

    const formik = useFormik({
        onSubmit: async (values) => {
            const res = await axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL,
                url: '/users',
                data: values
            })

            console.log(res.data);
            setAuth(res.data)
            if ( auth?.user?.id ) {
                return <Navigate to="/dashboard" replace={true} />
            }
        },
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        },
        validationSchema
    })

    if ( auth?.user?.id ) {
        return <Navigate to="/dashboard" replace={true} />
    }

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
                <form action="" className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder="Digite seu nome"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && formik.errors.name}
                    />

                    <Input
                        type="text"
                        name="username"
                        label="Seu nome de usuário"
                        placeholder="Digite seu usuário"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && formik.errors.username}
                    />

                    <Input
                        type="email"
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu e-mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                    />

                    <Input
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder="Digite sua senha"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && formik.errors.password}
                    />

                    <button type='submit' className="w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50" disabled={!formik.isValid || formik.isSubmitting}>
                        {formik.isSubmitting ? 'Carregando...' : 'Criar minha conta'}
                    </button>
                </form>
            </main>

        </div>
    )
}