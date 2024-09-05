import React from 'react'
import { Container } from '../../componets/Container';
import { FlexWrapper } from '../../componets/FlexWrapper';
import {S} from './Header_Styled'
import { Logo } from '../../componets/logo/Logo';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header: React.FC=()=> {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    
                    {width < breakpoint ? <MobileMenu menuItems={items} /> : <DesktopMenu menuItems ={items} />}

                </FlexWrapper>
            </Container>
        </S.Header>
    ); 
}
