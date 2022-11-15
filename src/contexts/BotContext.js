import { createContext, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const initialBotData = { };

const BotContext = createContext();

export default function BotProvider({ children }) {
    const { bot_id } = useParams();
    const [botData, setBotData] = useState(initialBotData);

    // useEffect(() => {
    //     const loadBot = async () => {
    //         const { bot } = await getBot(bot_id);
    //         if (bot) setBotData(bot);
    //     };

    //     loadBot();
    // }, [bot_id]);

    return (
        <BotContext.Provider value={{ botData }}>
            <Helmet>
                <title>{botData.name}</title>
            </Helmet>
            {children}
        </BotContext.Provider>
    );
}

export const useBot = () => useContext(BotContext);