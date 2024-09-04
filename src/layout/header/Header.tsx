import React from 'react'
import { Container } from '../../componets/Container';
import { FlexWrapper } from '../../componets/FlexWrapper';
import {S} from './Header_Styled'
import { Logo } from '../../componets/logo/Logo';


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header: React.FC=()=> {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems ={items} />
                    <MobileMenu menuItems = {items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    ); 
}
