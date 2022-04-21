import React from 'react';
import { getStyle } from '../lib';
import { MessageProps } from './props/MessageProps';
import { MessageArticleStyle, MessageHeaderStyle } from './styles/MessageStyle';
import DefaultAvatar from './DefaultAvatar';
import Id from './Id';

export default function Message({
    media,
    avatarProps,
    header,
    ...others
}: MessageProps): JSX.Element {
    return (
        <article style={getStyle(media, MessageArticleStyle)} {...others}>
            <DefaultAvatar
                media={media}
                styles={{ xs: { gridArea: 'profile' } }}
                {...avatarProps}
            />
            <header style={getStyle(media, MessageHeaderStyle)}>
                <Id
                    direction="horizontal"
                    media={media}
                    name={header.name}
                    idString={header.idString}
                    href={header.idHref}
                    options={header.options}
                />
                <time></time>
            </header>
        </article>
    );
}
