import React from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Message, InputWrapper, Input, InputIcon } from './styles';
import { useRef, useEffect } from 'react';
 
const ChannelData: React.FC = () => {
    return (
        <Container>
            <Message>
                <ChannelMessage
                    author="Marcos Paulo"
                    date="18/06/2020"
                    content="Vamos Jogar."
                />

                <ChannelMessage
                    author="Lucas Santos"
                    date="18/06/2020"
                    content="Vamos Dale."
                />

                <ChannelMessage
                    author="Marcos Paulo"
                    date="18/06/2020"
                    content="Vamos Jogar."
                />

                <ChannelMessage
                    author="Lucas Santos"
                    date="18/06/2020"
                    content="Vamos Dale."
                />


                <ChannelMessage
                    author="Marcos Paulo"
                    date="18/06/2020"
                    content="Vamos Jogar."
                />


                <ChannelMessage
                    author="Lucas Santos"
                    date="18/06/2020"
                    content="Vamos Dale."
                />


                <ChannelMessage
                    author="Marcos Paulo"
                    date="18/06/2020"
                    content="Vamos Jogar."
                />


                 <ChannelMessage 
                   author="Diego Fernandes"
                   date="18/06/2020"
                   content={
                       <>
                            <Mention>@Marcos Paulo</Mention>, me carrega no LOL de novo Por favor?
                       </>
                   }
                   hasMention
                   isBot
                />

                <ChannelMessage 
                   author="Lucas Santos"
                   date="18/06/2020"
                   content={
                       <>
                            <Mention>@Marcos Paulo</Mention>, Vamos carregar ele kkkkkkkkkkk
                       </>
                   }
                   hasMention
                />  
            </Message>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputWrapper>

        </Container>
    );
};

export default ChannelData;