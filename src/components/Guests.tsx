'use client'

import { Guests, get } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import useSWR from 'swr'

export default function Guests() {
  const { data, error } = useSWR<Guests>('/api', get)

  if (!data || error) return null

  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-4">
=======
    <div className="flex flex-col gap-2">
>>>>>>> 53aa4f7990e069f364fb50bf8f84972d4d8f54e1
      {data.guests.map((guest, index) => (
        <div key={index} className="rounded border p-2">
          <span className="text-sm">
            Signed by{' '}
            <span className="font-semibold text-blue-500">{guest.name}</span> on{' '}
            <span className="font-semibold">{formatDate(guest.date)}</span>
          </span>
        </div>
      ))}
    </div>
  )
}
