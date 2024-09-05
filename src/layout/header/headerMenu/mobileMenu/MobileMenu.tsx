import React from 'react'
import { Menu } from '../menu/Menu'
import {S} from '../HeaderMenu_Styled'



export const MobileMenu:React.FC<{menuItems: Array<string>}> =(props: {menuItems:Array<string>})=>{
    return (
        <S.MobileMenu>
        <S.BurgerButton isOpen={false}>
            <span></span>
        </S.BurgerButton>

        <S.FlexMobilePopup isOpen={true}>
           <Menu menuItems={props.menuItems}/>
        </S.FlexMobilePopup>

        </S.MobileMenu>
    )
}

