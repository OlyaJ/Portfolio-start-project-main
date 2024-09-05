import React from 'react'
import { Menu } from '../menu/Menu'
import {S} from '../HeaderMenu_Styled'



export const DesktopMenu:React.FC<{menuItems: Array<string>}> =(props: {menuItems:Array<string>})=>{
    return (
        <S.HeaderMenu>
            <Menu menuItems={props.menuItems}/>
        </S.HeaderMenu>
    )
}

