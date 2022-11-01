import { Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const Login = () => {
    return (
        <StyledContainer>
            <Head>
                <title>login</title>
            </Head>

            <StyledLoginContainer>
                <StyledImageWrapper>
                    {/* <Image src={WhatsAppLogo} alt="WhatsAppLogo" height={200} width={200} /> */}
                </StyledImageWrapper>

                <Button
                    variant="outlined"
                    onClick={() => {
                        console.log('sign in with google');
                    }}
                >Sign in with Google</Button>
            </StyledLoginContainer>
        </StyledContainer>
    );
};
const StyledContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: whitesmoke;
`;
const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
`;
const StyledImageWrapper = styled.div`
    margin-bottom: 50px;
`;
export default Login;
