function Card( {weatherStatus}){

    const   { country, degree, windSpeed, day, time, status, image } = weatherStatus;

    return (
        <>
            <div className="flex flex-col items-center gap-3 py-[20px] px-[40px] rounded-[20px] bg-[--secondary-clr] text-white">
                <div className="flex items-center min-h-[270px]"><img src={image} alt={status} className="w-[220px]"/></div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[clamp(28px,_5vw,_40px)]"><span className="font-bold">{country}  </span><span className="font-semibold">{degree}</span></h3>
                    <div className="text-[clamp(22px,_2vw,_25px)]"><span className="font-normal">wind speed : </span><span className="font-light">{windSpeed}</span></div>
                    <div className="text-[clamp(22px,_2vw,_25px)]"><span className="font-normal">{day} : </span><span className="font-light">{time}</span></div>
                    <span className="text-[clamp(22px,_2vw,_25px)] font-normal">{status}</span>
                </div>
            </div>
        </>
    )
}
export default Card ;