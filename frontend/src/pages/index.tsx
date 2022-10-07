import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import * as Dialog from '@radix-ui/react-dialog';
import Head from "next/head";
import { useEffect, useState } from "react";
//import { CodeSimple } from "phosphor-react";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { GameBanner } from "../components/GameBanner";
import { GameController } from "phosphor-react";
import { Input } from "../components/Form/Input";



interface GameProps {

  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [games, setGame] = useState<GameProps[]>([]);

  useEffect(() => {
    setGame(data);
  })
  return (
    <>
      <Head>
        <title>NLW Esports</title>
      </Head>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20 mb-20">
        <img className="w-[250px]" src="/logo.svg" alt="" />
        <h1 className="text-6xl text-white font-black my-8">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

        <div className="grid grid-cols-6 gap-6 mt-14">
          {games.map(game => (
            <GameBanner key={game.id} title={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.ads} />
          ))}

        </div>


        <Dialog.Root>
          <CreateAdBanner />

          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">Publique um anuncio</Dialog.Title>
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Input type="text" id="game" placeholder="Selecione o game que deseja jogar" />
                </div>

                <div>
                  <label htmlFor="  name">Seu nome (ou nickname)</label>
                  <Input id="name" placeholder="Como te chamam dentro do game?" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input type="number" id="yearsPlaying" placeholder="Tudo bem ser do ZERO" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual seu discord?</label>
                    <Input type="text" id="discord" placeholder="Usuário#0000" />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando Costuma jogar</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Domingo">D</button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Segunda">S</button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Terça">T</button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Quarta">Q</button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Quinta">Q</button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Sexta">S</button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 gap-1"
                        title="Sabádo">S</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual o horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="De" />
                      <Input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 text-sm">
                  <Input id="useVoiceChannel" type="checkbox" />
                  <label htmlFor="useVoiceChannel" className="select-none">Costumo me conectar no chat de voz</label>
                </div>
                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold">Cancelar</Dialog.Close>
                  <button type="submit" className="px-6 h-12 rounded-md font-semibold flex items-center  gap-3 bg-violet-500 hover:bg-violet-600"><GameController size={24} /> Encontrar duo</button>
                </footer>
              </form>

            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/games');

  const data = await res.json();

  return { props: { data } }

}
