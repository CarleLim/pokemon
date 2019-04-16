import React, { Component } from 'react';
import styled  from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: ${({ isProfileModalClosed }) => (isProfileModalClosed ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background: #fff;
    border-radius: 12px;
    display: flex;
`;

const Profile = styled.div`

`;

const ProfileImg = styled.img`
`;

const Infor = styled.div`
    padding: 0.5rem;
`;

class ProfileModal extends Component {
    
    render() {
        const { data, isProfileModalClosed, index } = this.props;
        return (
            <Container isProfileModalClosed={isProfileModalClosed}>
                <Modal>
                    <ProfileImg src={`https://img.pokemondb.net/artwork/${data.name.toLowerCase()}.jpg`} />
                    <Profile>
                        <Infor>Num: {index + 1}</Infor>
                        <Infor>Name: {data.name}</Infor>
                        <Infor>Types: {data.types.join(' / ')}</Infor>
                        <Infor>height: {data.height}</Infor>
                        <Infor>weight: {data.weight}</Infor>
                    </Profile>
                </Modal>
            </Container>
        );
    }
}

export default ProfileModal;
