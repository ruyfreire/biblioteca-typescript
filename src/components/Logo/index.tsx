import React from 'react'

import Image from 'next/image'

export function Logo() {
  return (
    <div className="inline-flex items-center gap-1 rounded border-2 border-teal-600 px-2 py-1">
      <Image width="35" height="35" alt="Logo" src="/icon.svg" />
      <span className="w-[70px] text-xs font-bold uppercase text-white">
        Biblioteca Digital
      </span>
    </div>
  )
}
