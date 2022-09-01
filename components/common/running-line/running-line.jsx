import React from 'react';
import PropTypes from 'prop-types';
import { Caption, H1 } from 'components';
import { RunningLineScrollContent, RunningLineSeparator, RunningLineWrapper } from './running-line.style';
import { withLink } from 'utils';
import Link from 'next/link';

const SeparatorText = () => (
    <div>
        <Caption>a color</Caption><br />
        <Caption>grading studion based</Caption><br />
        <Caption>in los angeles</Caption><br />
    </div>)

export const RunningLine = React.memo(({ titles = ['WE ARE BOLD', 'WE ARE HUNGRY',], separator = SeparatorText, outline, link, ...props }) => {

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

    return (
        <RunningLineWrapper link={link} {...props}>
            <RunningLineScrollContent outline={outline}>
                {data}
            </RunningLineScrollContent>
        </RunningLineWrapper>
    )
})

export const RunningLineLink = withLink(RunningLine);

RunningLine.displayName = 'RunningLine';
RunningLine.propTypes = {
    title: PropTypes.arrayOf(PropTypes.string),
    separator: PropTypes.element,
    outline: PropTypes.bool,
    link: PropTypes.string
}
