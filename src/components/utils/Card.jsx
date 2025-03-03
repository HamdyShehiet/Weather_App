function Card( {weatherStatus}){

    const   { country, degree, windSpeed, day, time, status, image } = weatherStatus;

    return (
        <>
            <div className="flex flex-col gap-5 items-center p-[10px_40px_40px_40px] rounded-[20px] bg-[#24353E]  text-white">
                <img src={image} alt={status} />
                <div className="info flex flex-col gap-5">
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