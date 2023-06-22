import Guests from '@/components/Guests'

import SignBook from '@/components/SignBook'

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-4 p-4">
      <SignBook />
      <hr />
      <Guests />
    </main>
  )
}
