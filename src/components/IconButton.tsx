import React from 'react';
import { mediaStyle } from '../lib/type/mediaStyle';
import { availableQueryName } from '../lib/type/queryType';
import Button from './Button';
import { IconButtonTextStyle } from './styles/IconButtonStyle';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon: string;
    media: availableQueryName;
    styles?: {
        buttonStyle?: mediaStyle;
        iconStyle?: mediaStyle;
    };
    options?: {
        renewStyle?: boolean;
        neverShrink?: boolean;
    };
}

export default function IconButton({
    icon,
    media,
    styles = {
        buttonStyle: {
            xs: {
                borderRadius: "9999px",
            }
        }
    },
    ...others
}: IconButtonProps): JSX.Element {
    return (
        <Button
            icon={icon}
            media={media}
            styles={{
                buttonStyle: styles?.buttonStyle,
                iconStyle: styles?.iconStyle,
                textStyle: IconButtonTextStyle,
            }}
            {...others}
        />
    );
}
