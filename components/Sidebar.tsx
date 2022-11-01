import React from 'react';
import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVerticalIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    return (
        <StyledContainer>
            <StyledHeader>
                <Tooltip title="User email" placement="right">
                    <StyledUserAvatar />
                </Tooltip>
                <div>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVerticalIcon />
                    </IconButton>
                    <IconButton>
                        <LogoutIcon />
                    </IconButton>
                </div>
            </StyledHeader>
            <StyledSearch>
                <SearchIcon />
                <StyledSearchInput placeholder="Search" />
            </StyledSearch>
            <StyledSidebarButton>START A NEW CONVERSATION</StyledSidebarButton>

            {/* List of conversations */}
        </StyledContainer>
    );
};
const StyledContainer = styled.div`
    max-width: 320px;
`;
const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 2px;
`;
const StyledSearch = styled.div``;
const StyledSearchInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
`;

const StyledSidebarButton = styled(Button)`
    width: 100%;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
`;
const StyledUserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;
export default Sidebar;
