import '../assets/css/bgPatternCss.css'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export default function Chat() {
    // const [respond, setRespond] = useState();
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState([]);

    // const API_KEY = import.meta.env.VITE_API_KEY;
    const API_KEY = "sk-proj-I8gY7bR1k1WP7wab2GVxT3BlbkFJ5uXNr3sUOMOVxPFqcynh";
    const handleSubmit = async (e) => {
        //menyambungkan ke Open ai dan memasukkan prompt
        e.preventDefault();

        //todo Mengatur kepribadian ai
        const promptAwal =
            'kamu adalah ChatBot, ChatBot adalah asisten pribadi user(pemberi pertanyaan) dalam dunia E-commerce!, ChatBot harus menjawab menggunakan bahasa yang mudah dimengerti dan menghindari penggunaan jargon teknis.';
        // ini adalah cara setting open ai
        const APIBody = {
            model: 'gpt-4',
            messages: [
                {
                    role: 'user',
                    content: `${promptAwal} + pertanyaan dari user${prompt}`
                }
            ]
        };

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + API_KEY
                },
                body: JSON.stringify(APIBody)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await response.json();
            console.log(data);
            const userMessage = { role: 'user', content: prompt };
            const botMessage = { role: 'bot', content: data.choices[0].message.content };
            setMessages([...messages, userMessage, botMessage]);
            // setRespond(data.choices[0].message.content);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className="bg-sky-50 w-full h-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 py-8 px-5 justify-center">
            <div className="hidden lg:block lg:col-span-2"></div>
            <section className="col-span-1 sm:col-span-3 md:col-span-6 lg:col-span-8 bg-white rounded-lg drop-shadow h-96">
                <div className="w-full h-full flex flex-col-reverse lg:grid lg:grid-cols-8">
                    <div className="h-full hidden rounded-l-lg lg:block lg:col-span-2 bg-white border overflow-y-auto divide-y">
                        <div className="w-full h-12 bg-white hover:bg-gray-300 px-4 flex items-center gap-2">
                            <span className="rounded-full px-2 py-2 bg-skyprimary">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"
                                        fill="#ffffff"
                                        className="fill-000000"
                                    />
                                    <ellipse
                                        cx="8.5"
                                        cy={12}
                                        rx="1.5"
                                        ry={2}
                                        fill="#ffffff"
                                        className="fill-000000"
                                    />
                                    <ellipse
                                        cx="15.5"
                                        cy={12}
                                        rx="1.5"
                                        ry={2}
                                        fill="#ffffff"
                                        className="fill-000000"
                                    />
                                    <path d="M8 16h8v2H8z" fill="#ffffff" className="fill-000000" />
                                </svg>

                            </span>
                            <h1 className="font-medium">ChatBot</h1>
                        </div>
                    </div>
                    <div className="h-full lg:col-span-6 bgpatterncss overflow-y-auto rounded-r-lg pb-20">
                        <section className="w-full h-10 border flex items-center px-2 bg-white">
                            <h1 className="font-medium text-lg">ChatBot</h1>
                        </section>
                        <div className='px-2 '>
                            {/* Rendering chat messages */}
                            {messages.map((message, index) => (
                                <div key={index} className={`flex w-full justify-${message.role === 'user' ? 'end' : 'start'}`}>
                                    <section className={`h-auto bg-primary max-w-72 selection:bg-gray-600 selection:text-white px-3 py-1 rounded-lg text-white mt-4`}>
                                        <p>{message.content}</p>
                                    </section>
                                </div>
                            ))}
                            {/* End rendering chat messages */}
                        </div>
                        <section className='w-full lg:w-[75%] flex fixed bottom-0'>
                            <form onSubmit={handleSubmit} className='px-1 py-1 flex gap-1 mt-5 bg-zinc-800 w-full rounded-b-lg lg:rounded-br-lg'>
                                <input type="text" placeholder='Type a message' value={prompt} onChange={(e) => setPrompt(e.target.value)}
                                    className='border-none bg-transparent text-white rounded-full w-[95%] focus:outline-none px-2 py-1' />
                                <button type="submit" className="hover:bg-gray-600 hover:rounded-lg px-1 py-1"><PaperAirplaneIcon className="w-6 h-6 text-white" aria-hidden="true" /></button>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
            <div className="hidden lg:block lg:col-span-2"></div>
        </main>
    )
}