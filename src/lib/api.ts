export const get = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const data = await fetch(url, options)
  if (!data.ok) throw new Error(`Status ${data.status} ${data.statusText}`)
  return data.json()
}

export const post = async (
  url: string,
  { arg }: { arg: { [key: string]: string } }
) => {
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  })
  return data.json()
}

export type Guest = {
  id: number
  name: string
  date: string
}

export type Guests = { guests: Guest[] }
