import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { BOTTOM, TOP } from '../../assets';

const TopFleur = styled.div`
    background: transparent center/contain scroll no-repeat;
    background-image: url(${TOP});
    width: 30rem;
    height: 3.375rem;
`;

const BottomFleur = styled.div`
    background: transparent center/contain scroll no-repeat;
    background-image: url(${BOTTOM});
    width: 18rem;
    height: 3.375rem;
`;

interface BoxProps {
    direction: 'column' | 'row';
}

const Box = styled.div<BoxProps>`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
`;

export const DialogBox: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box direction='column'>
            <TopFleur />
            <Box direction='row'>{children}</Box>
            <BottomFleur />
        </Box>
    );
};
