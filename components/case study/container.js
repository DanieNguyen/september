import styled from 'styled-components';
import { device } from '../device';

export const Video = styled.video`
    max-width: 100%;
`;

export const Img = styled.img`
	object-fit: cover;
    width: 100%;
    margin-bottom: 2rem;
    @media ${device.laptop} {
        margin-bottom: 0rem;
    }
`;

export const FlexTwo = styled.div`
	display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 4rem;
    @media ${device.laptop} {
        flex-direction: row;
        margin-bottom: 0rem;
    }
`;

export const Half = styled.div`
    width: 100%;
    @media ${device.laptop} {
        width: 48%;
    }
`;