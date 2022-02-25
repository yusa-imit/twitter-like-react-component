import React from 'react';
import { mediaStyle } from '../lib/type/mediaStyle';
import { availableQueryName } from '../lib/type/queryType';
import Button from './Button';

interface IconButtonProps {
    icon: JSX.Element | JSX.IntrinsicElements | SVGElement;
    media: availableQueryName;
    styles?: {
        buttonStyle?: mediaStyle;
        iconStyle?: mediaStyle;
    };
}

export default function IconButton({
    icon,
    media,
    styles,
}: IconButtonProps): JSX.Element {
    return (
        <Button
            icon={icon}
            media={media}
            styles={{
                buttonStyle: styles?.buttonStyle,
                iconStyle: styles?.iconStyle,
                textStyle: { xs: { display: 'none' } },
            }}
        />
    );
}
