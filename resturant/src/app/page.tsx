import Image from 'next/image'
import Slider from '@/Components/Slider'
import Featured from '@/Components/Featured'
import Offers from '@/Components/Offers'



export default function Home() {
  return (
    <>
    <main>
      <Slider/>
      <Featured/>
      <Offers/>
    </main>
    </>
  )
}
