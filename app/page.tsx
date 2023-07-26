'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import { CustomFilter, Hero, SearchBar , CarCard, ShowMore} from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
 
import { fetchCars } from '@/utils'

export default  function Home() {

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

    // Search state
    const [manufacturer,setManufacturer] = useState('')
    const [model,setModel] = useState('')

  // Filter state
  const [fuel,setFuel] = useState('')
  const [year,setYear] = useState(2022)

  // Pagination state
  const [limit,setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year:year || 2022, 
        fuel:fuel || '' ,
        limit:limit || 10 ,
        model: model || '', 
      })
      setAllCars(result)
    } catch (error) {
      console.log(error);
      
    } finally  {
      setLoading(false)
    }
}
   

  useEffect(() => {
    getCars()
  },[manufacturer, model, limit, fuel, year])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the car you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard  car={car}/>
              ))}
            </div>
            {loading && (
              <div className="mt-16 flex-center w-full">
                <Image src='/loader.svg' alt='Loading' width={50} height={50} className='object-contain'/>
              </div>
            )}
            <ShowMore pageNumber={limit   / 10} isNext={limit > allCars.length } setLimit={setLimit}/>
          </section>
        ) : (
          <div className='home__erorr-container'>
            <h2 className='text-black font-bold text-xl'>Oops, no results</h2>
           
          </div>
        )}
      </div>
    </main>
  )
}
