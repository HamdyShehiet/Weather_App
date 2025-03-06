function Filter() {

    return(
        <div className="flex items-center justify-center flex-wrap gap-5 py-4 px-8 rounded-lg bg-[--secondary-clr] text-white">
            <h2 className="text-xl font-semibold">Filters</h2>
            <div className=" flex items-center justify-center flex-wrap gap-9">
            <select id="temp-filter" name="temp-filter" className="w-[130px] py-2 px-1 rounded-[9px] outline-none border border-[#9e9d9d78] bg-[--secondary-clr]" >
                <option value="coldest">Coldest</option>
                <option value="hottest">Hottest</option>
            </select>
            <select id="temp-range" name="temp-range" className="w-[130px] py-2 px-1 rounded-[9px] outline-none border border-[#9e9d9d78] bg-[--secondary-clr]">
                <option value="0-10">0°C - 10°C</option>
                <option value="10-20">10°C - 20°C</option>
                <option value="20-30">20°C - 30°C</option>
                <option value="+30">Above 30°C</option>
            </select>
            <select id="status-filter" name="status-filter" className="w-[130px] py-2 px-1 rounded-[9px] outline-none border border-[#9e9d9d78] bg-[--secondary-clr]">
                <option value="rainy">Rainy</option>
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
            </select>
            </div>
        </div>
    )
}
export default Filter;