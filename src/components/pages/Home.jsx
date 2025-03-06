import Card from "../utils/Card";
import Search from "../utils/Search";
import weatherData from "../../fakeData/weather.json"
import Filter from "../utils/Filters";

function Home() {

    return (
      <section className="py-[30px]">
        <div className="container flex flex-col items-center gap-y-[45px]">
            <h1 className="max-w-[778px] w-full text-[clamp(25px,_5vw,_40px)] text-center leading-[1.3] font-medium text-white">Seeing the weather of the whole world with <span className="text-[--lightskyblue-clr]">Dark Weather!</span></h1>
            <div className="flex items-center justify-around flex-wrap gap-x-[30px] gap-y-[25px] w-full">
                <Search />
                <Filter />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,min(350px,_100%))] justify-center items-center gap-[30px] w-full">
              {
                weatherData.map((weatherStatus) => {
                  return (
                    <Card key={weatherStatus.id} weatherStatus={weatherStatus}/>                  )
                })
              }
            </div>
        </div>
      </section>
    )
  }
  
  export default Home;