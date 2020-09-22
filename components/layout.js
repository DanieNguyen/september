import React from 'react';
import styled from 'styled-components';
import { device } from './device';

const Layout = styled.div`
    width: 88%;
    @media ${device.tablet} {
        width: 85%;
        p { 
            font-size: 18px;
        }
    }
    @media ${device.laptop} {
        width: 92%;
    }
    @media ${device.desktop} {
        width: 65%;
    }
    margin: auto;
`;

export default function layout({ children }) {
    return <Layout>{children}</Layout>;
}
