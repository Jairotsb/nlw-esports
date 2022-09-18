import Head from "next/head";
import { MagnifyingGlassPlus } from 'phosphor-react';


export default function Home() {
  return (
    <>
      <Head>
        <title>NLW Esports</title>
      </Head>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img className="w-[300px]" src="/logo.svg" alt="" />
        <h1 className="text-6xl text-white font-black my-10">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/assets/game-1.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <span className="font-bold text-white block">Teste</span>
              <span className="text-zinc-300 text-sm"> 0 Anúncios</span>
            </div>

          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/assets/game-2.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <span className="font-bold text-white block">Teste</span>
              <span className="text-zinc-300 text-sm"> 0 Anúncios</span>
            </div>

          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/assets/game-3.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <span className="font-bold text-white block">Teste</span>
              <span className="text-zinc-300 text-sm"> 0 Anúncios</span>
            </div>

          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/assets/game-5.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <span className="font-bold text-white block">Teste</span>
              <span className="text-zinc-300 text-sm"> 0 Anúncios</span>
            </div>

          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/assets/game-6.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <span className="font-bold text-white block">Teste</span>
              <span className="text-zinc-300 text-sm"> 0 Anúncios</span>
            </div>

          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/assets/game-7.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <span className="font-bold text-white block">Teste</span>
              <span className="text-zinc-300 text-sm"> 0 Anúncios</span>
            </div>
          </a>
        </div>

        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
          <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
              <strong className="text-zinc-400">Publique um anúncio para encontrar novos players</strong>
            </div>
            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
