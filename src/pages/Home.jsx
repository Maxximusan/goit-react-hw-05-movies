import styled from 'styled-components'

const Text = styled.p`
    color: ${p => p.theme.colors.accent};
    font-family: ${p => p.theme.fonts.monospace};
    margin: ${ p => p.theme.space[3]}px;
    font-size: ${ p => p.theme.fontSizes.l};
`
export const Home = () => {
    return(
        <Text>Trending today</Text>
        )
}