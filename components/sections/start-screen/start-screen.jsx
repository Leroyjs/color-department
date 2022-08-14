import { StartScreenWrapper, RunningLineStyle,RunningLineStyled } from './start-screen.style';
import { RunningLine, Grid } from 'components';

export const StartScreen = () => {
    return (
        <StartScreenWrapper>
            <Grid/>
            <RunningLine className={RunningLineStyle}></RunningLine>
        </StartScreenWrapper>
    )
}