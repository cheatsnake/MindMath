import React from 'react';
import styled from 'styled-components';

const StyledGridbox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

const Gridbox = () => {
    return <StyledGridbox/>
};

export default Gridbox;