import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileModal from './ProfileModal';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
`;

const PokemonImg = styled.img`

`;

const PokemonName = styled.div`

`;

const PokemonTypes = styled.div`

`;

class Card extends Component {
    state = {
        isProfileModalClosed: true,
    }

    isProfileModalSwitch = () => {
        const { isProfileModalClosed } = this.state;
        this.setState({ isProfileModalClosed: !isProfileModalClosed });
    }

    render () {
        const { data, index } = this.props;
        const { isProfileModalClosed } = this.state;
        return (
            <Container onClick={() => this.isProfileModalSwitch()}>
                <ProfileModal isProfileModalClosed={isProfileModalClosed} data={data} index={index} />
                <PokemonImg src={data.img} />
                <PokemonName>{data.name}</PokemonName>
                <PokemonTypes>{data.types.join(' / ')}</PokemonTypes>
            </Container>
        );
    }
}

export default Card;
