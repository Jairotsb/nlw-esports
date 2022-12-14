import { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {



}

export function Input(props: InputProps) {
    return (
        <input
            type={props.type}
            {...props}
            id={props.id}
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        />
    );


}