import { Caption, H1 } from 'components';
import React from 'react';
import { RunningLineScrollContent, RunningLineSeparator, RunningLineWrapper } from './running-line.style';
import PropTypes from 'prop-types';

const SeparatorText = () => (
    <div>
        <Caption>a color</Caption><br />
        <Caption>grading studion based</Caption><br />
        <Caption>in los angeles</Caption><br />
    </div>)

export const RunningLine = React.memo(({ titles = ['WANT', 'TO', 'SLEEP', 'AND', 'MAC_PRO'], separator = SeparatorText, outline, link, ...props }) => {

    const content = titles.reduce((acc, curr) => {
        acc.push(curr, separator);
        return acc
    }, [])
    //Добавляем в массив его копию, нужно для анимации
    content.push(...content)
    const data = content.map((title, index) => index % 2 ?
        <RunningLineSeparator key={index} outline={outline}>
            {separator()}
        </RunningLineSeparator>
        :
        <H1 key={index}>{title}</H1>)

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
})

RunningLine.displayName = 'RunningLine';
RunningLine.propTypes = {
    title: PropTypes.arrayOf(PropTypes.string),
    separator: PropTypes.element,
    outline: PropTypes.bool,
    link: PropTypes.string
}