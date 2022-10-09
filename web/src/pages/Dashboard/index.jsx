import { Icon, Card, DateSelect } from '~/components'


export const Dashboard = () => (

    <>

        <header className="bg-red-500 text-white">
            <div className="container max-w-3xl flex justify-between p-4">
                <img src="/img/logo/logo-fundo-vinho.svg" alt="logo" className="w-28 md:w-40" />
                <a href="/profile">
                    <Icon name="profile" className="w-10" />
                </a>
            </div>
        </header>

        <main className='space-y-6'>

            <section id="header" className="bg-red-500 text-white">
                <div className="container max-w-3xl space-y-2 p-4">
                    <span>Olá, Sammy</span>
                    <h3 className='text-2xl font-bold'>Qual é o seu palpite ?</h3>
                </div>
            </section>

            <section id="content" className='container max-w-3xl p-4 space-y-4'>
                
                <DateSelect />

                <div className='space-y-4'>

                    <Card 
                        teamA={{ slug: 'sui' }}
                        teamB={{ slug: 'cam' }}
                        match={
                            { 
                                local: 'Estádio São Januário',
                                city:  'Cairo',
                                time:  '7:00'
                            }
                        }
                    />

                    <Card 
                        teamA={{ slug: 'uru' }}
                        teamB={{ slug: 'cor' }}
                        match={
                            { 
                                local: 'Estádio São Januário',
                                city:  'Cairo',
                                time: '7:00'
                            }
                        }
                    />

                    <Card 
                        teamA={{ slug: 'por' }}
                        teamB={{ slug: 'gan' }}
                        match={
                            { 
                                local: 'Estádio São Januário',
                                city:  'Cairo',
                                time: '7:00'
                            }
                        }
                    />

                    <Card 
                        teamA={{ slug: 'bra' }}
                        teamB={{ slug: 'ser' }}
                        match={
                            { 
                                local: 'Estádio São Januário',
                                city:  'Cairo',
                                time: '7:00'
                            }
                        }
                    />
                    
                </div>
                
            </section>

        </main>

    </>
)