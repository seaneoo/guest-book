'use client'

import { Guests, get } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import useSWR from 'swr'

export default function Guests() {
  const { data, error } = useSWR<Guests>('/api', get)

  if (!data || error) return null

  return (
    <div>
      <h2 className="mb-2 text-2xl font-semibold">💁 Previous Guests</h2>
      <div className="flex flex-col gap-4">
        {data.guests.map((guest, index) => (
          <div key={index} className="rounded border p-2">
            <span className="text-sm">
              Signed by{' '}
              <span className="font-semibold text-blue-500">{guest.name}</span>{' '}
              on <span className="font-semibold">{formatDate(guest.date)}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
