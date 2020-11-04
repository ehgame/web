import * as React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`

`
const ListContainer = styled.ul`
    display: flex;

`

const SocialItem = styled.li`
    list-style: none;
    padding: 0 10px;
`

const Link = styled.a`
    color: #000
`

const index = () => {
    return (
        <SocialContainer>
            <ListContainer>
                <SocialItem>
                    <Link href="https://www.twitch.tv/rainabadal">Twitch</Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://discord.com/channels/773639844320116806/773639844320116809">Discord</Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://twitter.com/badalraina31">Twitter</Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.youtube.com/channel/UCXgQbuKS-ic1uNn76hCUBqA/?guided_help_flow=5">YouTube</Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.instagram.com/raina.badal/">Instagram</Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.facebook.com/badalRaina31">Facebook</Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.reddit.com/user/rainabadal">Reddit</Link>
                </SocialItem>
            </ListContainer>
        </SocialContainer>
    )
}

export default index;