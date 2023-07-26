'use client'
import React from 'react'
import { CustomButtonProps } from '@/types'
import Image from 'next/image'


export const CustomButton = ({handleClick, title, containerStyles, textStyles, rightIcon, isDisabled}: CustomButtonProps) => {
  return (
    <button onClick={handleClick} type={'button'} disabled={false} className={`custom-btn ${containerStyles}`}>
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt='Arrow' fill className='object-contain'/>
          </div>
        )}
    </button>
  )
}
