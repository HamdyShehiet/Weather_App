function Filter() {

    return(
        <div className="flex items-center justify-center flex-wrap gap-5 py-4 px-8 rounded-lg bg-[#24343D]">
            <h2 className="text-xl font-semibold text-white">Filters</h2>
            <div className=" flex items-center justify-center flex-wrap gap-9">
            <select className="w-[130px] py-2 px-1 rounded-[9px] outline-none border border-[#FFFFFF78]  bg-[#24343D]  text-white" id="temperatureFilter" name="temperature">
                <option value="coldest">Coldest</option>
                <option value="hottest">Hottest</option>
            </select>
            <select className="w-[130px] py-2 px-1 rounded-[9px] outline-none border border-[#FFFFFF78]  bg-[#24343D]  text-white" id="rangeFilter" name="temperatureRange">
                <option value="0-10">0°C - 10°C</option>
                <option value="10-20">10°C - 20°C</option>
                <option value="20-30">20°C - 30°C</option>
                <option value="30+">Above 30°C</option>
            </select>
            <select className="w-[130px] py-2 px-1 rounded-[9px] outline-none border border-[#FFFFFF78]  bg-[#24343D]  text-white" id="weatherFilter" name="weatherType">
                <option value="rainy">Rainy</option>
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
            </select>
            </div>
        </div>
    )
}
export default Filter;