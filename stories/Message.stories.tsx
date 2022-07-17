import React from 'react';
import Message from '../src/components/Message';
import useMedia from '../src/lib/useMedia';
const meta = {
    title: 'Message',
    component: Message,
    argTypes: {},
};
export default meta;

const Default_Message_Template = (args) => {
    const media = useMedia();
    return (
        <Message
            media={media}
            messageHref={''}
            header={{
                name: 'Test',
                idString: '@test_id',
                datetime: '',
                idHref: '',
                options: undefined,
            }}
        >
            {'Test_Message'}
        </Message>
    );
};
