import { RunningLineWrapper, RunningLineScrollContainer, RunningLineScrollContent, RunningLineSeparator } from './running-line.style'
import { H1, Caption } from 'components';

const separatorText = (
    <div>
        <Caption>a color</Caption><br />
        <Caption>grading studion based</Caption><br />
        <Caption>in los angeles</Caption><br />
    </div>)

export const RunningLine = ({ titles = ['WANT', 'TO', 'SLEEP','AND','MAC_PRO'], separator = separatorText, outline = true, link, ...props }) => {

    const content = titles.reduce((acc, curr) => {
        acc.push(curr, separator);
        return acc
    }, [])
    //Добавляем в массив его копию, нужно для анимации
    content.push(...content)
    console.log(content)
    const data = content.map((title, index) => index % 2 ?
        <RunningLineSeparator key={index} outline={outline}>
            {separator}
        </RunningLineSeparator>
        :
        <H1>{title}</H1>)

    const redirectByLink = () => {
        if (link) {
            //TODO: реализовать навигацию по ссылкам
        }
    }

    return (
        <RunningLineWrapper onClick={redirectByLink} link={link} {...props}>
            <RunningLineScrollContent outline={outline}>
                {data}
            </RunningLineScrollContent>
        </RunningLineWrapper>
    )
}
