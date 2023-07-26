'use client'
import { ShowMoreProps } from '@/types'
import { CustomButton } from './CustomButton'


export const ShowMore = ({isNext, pageNumber, setLimit}: ShowMoreProps) => {
   
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        setLimit(newLimit)
    }
  return (
    <div className='w-full mt-10 flex-center gap-5'>
         {!isNext && (
            <CustomButton title='Show More' btnType='button' containerStyles='bg-primary-blue rounded-full text-white' handleClick={handleNavigation}/>
         )}
    </div>
  )
}
