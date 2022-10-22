import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'

const validationSchema = yup.object().shape({
    homeTeamScore: yup.string().required(),
    awayTeamScore: yup.string().required()
})

export const Card = ({ disabled, gameId, homeTeam, awayTeam, homeTeamScore, awayTeamScore, match }) => {

    const [auth] = useLocalStorage('auth')

    const formik = useFormik({
        onSubmit: (values) => {
            
            axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL,
                url: '/hunches',
                headers: {
                    authorization: `Bearer ${auth.accessToken}`
                },
                data: {
                    ...values,
                    gameId
                }
            })
        },
        initialValues: {
            homeTeamScore,
            awayTeamScore
        },
        validationSchema
    })
    
    return (
        <div className="rounded-xl border border-gray-300 p-4 text-center space-y-2">

            <div className="flex flex-col">
                <span className='text-sm md:text-base text-gray-700'>{match.local} - {match.city}</span>
                <span className='text-sm md:text-base text-gray-700 font-bold'>{match.time}</span>
            </div>
            
            <form className="flex space-x-4 justify-center items-center">
                <span className="uppercase">{homeTeam}</span>
                <img src={`/img/flags/${homeTeam}.png`} alt="flag" />

                <input 
                    className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl rounded-md text-center"
                    type="number" 
                    name="homeTeamScore"
                    value={formik.values.homeTeamScore}
                    onChange={formik.handleChange}
                    onBlur={formik.handleSubmit}
                    disabled={disabled}
                />
                <span className='text-red-500 font-bold'>X</span>
                <input 
                    className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl rounded-md text-center"
                    type="number" 
                    name="awayTeamScore"
                    value={formik.values.awayTeamScore}
                    onChange={formik.handleChange}
                    onBlur={formik.handleSubmit}
                    disabled={disabled}
                />

                <img src={`/img/flags/${awayTeam}.png`} alt="flag" />
                <span className="uppercase">{awayTeam}</span>
            </form>
        </div>
    )
}