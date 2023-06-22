'use client'

import { post } from '@/lib/api'
import { useRef } from 'react'
import useSWRMutation from 'swr/mutation'

export default function SignBook() {
  const { trigger, isMutating } = useSWRMutation('/api', post)
  const nameInput = useRef<HTMLInputElement>(null)

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    if (nameInput.current && nameInput.current.value) {
      try {
        const res = await trigger({ name: nameInput.current.value })
        console.log(res)
      } catch (e) {
        console.error(e)
      }
      nameInput.current.value = ''
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          ref={nameInput}
          type="text"
          placeholder="Your name"
          required
          disabled={isMutating}
          aria-disabled={isMutating}
          className="flex-1 rounded border px-4 py-2 outline-none transition-colors focus-within:border-blue-500 hover:border-blue-500"
        />
        <button
          disabled={isMutating}
          aria-disabled={isMutating}
          onClick={handleClick}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
          Sign your name
        </button>
      </div>
    </div>
  )
}
