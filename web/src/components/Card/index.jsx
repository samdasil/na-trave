export const Card = ({ teamA, teamB, match }) => (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-2">

        <div className="flex flex-col">
            <span className='text-sm md:text-base text-gray-700'>{match.local} - {match.city}</span>
            <span className='text-sm md:text-base text-gray-700 font-bold'>{match.time}</span>
        </div>
        
        <div className="flex space-x-4 justify-center items-center">
            <span className="uppercase">{teamA.slug}</span>
            <img src={`/img/flags/${teamA.slug}.png`} alt="flag" />

            <input type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl rounded-md text-center" name="" id="" />
            <span className='text-red-500 font-bold'>X</span>
            <input type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl rounded-md text-center" name="" id="" />

            <img src={`/img/flags/${teamB.slug}.png`} alt="flag" />
            <span className="uppercase">{teamB.slug}</span>
        </div>
    </div>
)