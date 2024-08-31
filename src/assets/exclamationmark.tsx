import { COLORS } from '../constants';

export const ExclamationMark = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        id='Outline'
        viewBox='0 0 24 24'
        width='20'
        height='20'
        style={{ cursor: 'pointer' }}
    >
        <path
            d='M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z'
            fill={COLORS.red}
        />
        <path
            d='M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z'
            fill={COLORS.red}
        />
        <rect x='11' y='17' width='2' height='2' rx='1' fill={COLORS.red} />
    </svg>
);
