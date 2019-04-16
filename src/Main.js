import React, { Component } from 'react';
import styled  from 'styled-components';

import Card from './Components/Card';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

class Main extends Component {
    
    render() {
        const { data } = this.props;
        return (
            <Container>
                {data && data.map((e,i) => <Card data={e} index={i} />)}
            </Container>
        );
    }
}

export default Main;
