import React from 'react';
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu,SidebarLink,SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>about</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>project</SidebarLink>
                    <SidebarLink to='interest' onClick={toggle}>interest</SidebarLink>
                    <SidebarLink to='blog' onClick={toggle}>blog</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to ='/message'>
                        Message
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
