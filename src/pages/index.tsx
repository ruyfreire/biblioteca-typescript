import Head from 'next/head'
import Image from 'next/image'

import ImageBackground from '@/assets/images/library-background.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Biblioteca Typescript</title>
      </Head>

      <div className="relative flex flex-grow items-center justify-center">
        <Image
          width="300"
          height="300"
          alt="Imagem de estante de livros"
          src={ImageBackground}
        />
      </div>
    </>
  )
}
