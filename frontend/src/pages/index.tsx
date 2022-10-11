import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Head from "next/head";
import { useEffect, useState } from "react";
//import { CodeSimple } from "phosphor-react";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";
import { GameBanner } from "../components/GameBanner";
import * as Dialog from '@radix-ui/react-dialog';




export interface GameProps {

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
  }, []);
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
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/games');

  const data = await res.json();

  return { props: { data } };

}
