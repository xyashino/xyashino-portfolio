import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  isEnglish: boolean
  setIsEnglish: Dispatch<SetStateAction<boolean>>
}

export const LanguageSwitch = ({ isEnglish, setIsEnglish }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        onClick={() => setIsEnglish(prev => !prev)}
        className="relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer bg-secondary"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter') setIsEnglish(prev => !prev)
        }}
        role="switch"
        aria-checked
      >
        <span className="sr-only">Switch language</span>
        <span
          className={`inline-block h-4 w-4 transform rounded-full transition bg-secondary-content ${
            isEnglish ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
    </div>
  )
}
