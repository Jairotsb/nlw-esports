import * as Dialog from '@radix-ui/react-dialog';
import * as CheckBox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from "../components/Form/Input";
import { CaretUp, Check, GameController } from "phosphor-react";
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

export function CreateAdModal() {

    const [games, setGame] = useState<GamePostsProps[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);

    useEffect(() => {
        axios('http://localhost:3333/games')
            .then(response => {
                setGame(response.data);
            })
    }, []);

    async function handleCreateAd(e: FormEvent) {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel
            });

            alert('Anuncio postado!');
        } catch (err) {
            alert('ocorreu um erro');
            console.log(err);
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-3xl font-black">Publique um anuncio</Dialog.Title>
                <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label>
                        <Select.Root name="game">
                            <Select.Trigger id="game" className="h-35 py-3 px-4 flex leading-none justify-center gap-5 items-center rounded bg-zinc-500 white-text">
                                <Select.Value className="placeholder:bg-zinc-500/70" placeholder="Selecione o game" />
                                <Select.Icon className="text-violet-500" />
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content className="overflow-hidden bg-[#2a2634] rounded-md w-400">
                                    <Select.ScrollUpButton className="flex items-center  justify-center">
                                        <CaretUp size={20} className="text-white text-center" />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport className="text-white p-5">
                                        {games.map(game => (
                                            <Select.Item key={game.id} value={game.id} className="font-arial-13 leading-none text-white rounded flex items-center gap-5 h-25 px-35 py-25 select-none my-10">
                                                <Select.ItemText>{game.title}</Select.ItemText>
                                                <Select.ItemIndicator><Check className="text-green-500" /></Select.ItemIndicator>
                                            </Select.Item>
                                        ))}
                                        <Select.Separator />
                                    </Select.Viewport>
                                    <Select.ScrollDownButton />
                                </Select.Content>
                            </Select.Portal>

                        </Select.Root>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input id="name" name="name" placeholder="Como te chamam dentro do game?" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <Input type="number" id="yearsPlaying" name="yearsPlaying" placeholder="Tudo bem ser do ZERO" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual seu discord?</label>
                            <Input type="text" id="discord" name="discord" placeholder="Usuário#0000" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays">Quando Costuma jogar</label>


                            <ToggleGroup.Root
                                className="grid grid-cols-4 gap-2"
                                type="multiple"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >

                                <ToggleGroup.Item
                                    value="0"
                                    className={`w-8 h-8 rounded gap-1 ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Domingo">D
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="1"
                                    className={`w-8 h-8 rounded gap-1 ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Segunda">S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="2"
                                    className={`w-8 h-8 rounded gap-1 ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Terça">T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="3"
                                    className={`w-8 h-8 rounded gap-1 ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Quarta">Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="4"
                                    className={`w-8 h-8 rounded gap-1 ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Quinta">Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="5"
                                    className={`w-8 h-8 rounded gap-1 ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Sexta">S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="6"
                                    className={`w-8 h-8 rounded gap-1 ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Sabádo">S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Qual o horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input id="hourStart" type="time" name="hourStart" placeholder="De" />
                                <Input id="hourEnd" type="time" name="hourEnd" placeholder="Até" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex gap-2 text-sm items-center">
                        <CheckBox.Root
                            id="useVoiceChannel"
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceChannel(true)
                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }}
                            className="w-6 h-6 rounded bg-zinc-900 p-1"
                        >
                            <CheckBox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </CheckBox.Indicator>
                        </CheckBox.Root>
                        <label className="select-none" htmlFor="useVoiceChannel">Costumo me conectar no chat de voz</label>
                    </div>
                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold">Cancelar</Dialog.Close>
                        <button type="submit" className="px-6 h-12 rounded-md font-semibold flex items-center  gap-3 bg-violet-500 hover:bg-violet-600"><GameController size={24} /> Encontrar duo</button>
                    </footer>
                </form>

            </Dialog.Content>
        </Dialog.Portal>


    );


}

export type GamePostsProps = {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}
