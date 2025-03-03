import Search from "../utils/Search";
import Filter from "../utils/Filters";

function Home() {

    return (
      <section>
        <div className="container flex flex-col items-center gap-y-[45px]">
            <h1 className="max-w-[778px] w-full mt-[30px] text-[clamp(25px,_5vw,_40px)] text-center leading-[1.3] font-medium text-[--white-color]">Seeing the weather of the whole world with <span className="text-[#78CFFF]">Dark Weather!</span></h1>
            <div className="grid justify-center grid-cols-[50%] items-center gap-y-[25px] w-full">
                <Search />
                {/* <Filter /> */}
            </div>
            <div className="w-full bg-green-900">
            </div>
        </div>
      </section>
    )
  }
  
  export default Home;