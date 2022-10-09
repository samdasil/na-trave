import { Icon } from '~/components'
import { Card, DateSelect } from '../../components'

export const Profile = () => (
    
    <>

        <header className="bg-red-500 text-white p-4">
            <div className="container max-w-3xl flex justify-between">
                <img src="/img/logo/logo-fundo-vinho.svg" alt="logo" className="w-28 md:w-40" />
            </div>
        </header>

        <main className='space-y-6'>
            <section id="header" className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl space-y-2">
                    <a href="/dashboard">
                        <Icon name="back" className="w-10" />
                    </a>
                    <h3 className='text-2xl font-bold'>Sammy Silva</h3>
                </div>
            </section>

            <section id="content" className='container max-w-3xl p-4 space-y-4'>
                
                <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

                <DateSelect />

                <div className='space-y-4'>

                    <Card 
                        teamA={{ slug: 'sui' }}
                        teamB={{ slug: 'cam' }}
                        match={
                            { 
                                local: 'Estádio São Januário',
                                city:  'Cairo',
                                time: '7:00'
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