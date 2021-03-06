import React from 'react'
import styled from 'styled-components'

import { Direction, Robot as RobotType } from '../types'

const rotations: Record<Direction, number> = {
  [Direction.North]: 180,
  [Direction.East]: 270,
  [Direction.South]: 0,
  [Direction.West]: 90,
}

const Container = styled.div<{ direction: Direction }>`
  height: 100%;
  transform: rotate(${(props) => rotations[props.direction] || 0}deg);
  transform-origin: center center;
  width: 100%;
`

interface Props {
  robot: RobotType
}

function Robot({ robot }: Props) {
  return (
    <Container direction={robot.direction}>
      <svg viewBox="0 0 512 512">
        <path
          d="M256.002 90.32a8.552 8.552 0 01-8.553-8.553V23.369a8.553 8.553 0 018.553-8.553 8.552 8.552 0 018.553 8.553v58.398a8.553 8.553 0 01-8.553 8.553z"
          fill="#2ba5f7"
        />
        <path fill="#e09b2d" d="M191.825 208.645h128.351v34.782H191.825z" />
        <path
          d="M364.126 81.047v136.721H147.874V81.047c0-15.977 12.955-28.932 28.932-28.932h158.389c15.987.001 28.931 12.956 28.931 28.932z"
          fill="#f95428"
        />
        <path
          d="M196.192 52.116h-19.387c-15.977 0-28.932 12.955-28.932 28.932v136.721h19.387V81.047c.001-15.976 12.956-28.931 28.932-28.931z"
          fill="#e54728"
        />
        <g fill="#f7b239">
          <path d="M171.606 363.784h33.413v121.303h-33.413zM306.992 363.784h33.402v121.303h-33.402z" />
        </g>
        <path
          d="M306.992 364.924v42.103h33.402v-42.103h-33.402zm-135.386 42.103h33.413v-42.103h-33.413v42.103z"
          fill="#e09b2d"
        />
        <g fill="#f7b239">
          <path d="M348.799 264.091h62.299v35.17h-62.299zM100.468 264.091h63.166v35.17h-63.166zM203.251 108.576c16.513 0 29.89 13.388 29.89 29.89 0 16.513-13.377 29.89-29.89 29.89-16.501 0-29.878-13.377-29.878-29.89 0-16.502 13.377-29.89 29.878-29.89zM308.749 108.576c16.501 0 29.89 13.388 29.89 29.89 0 16.513-13.388 29.89-29.89 29.89-16.513 0-29.89-13.377-29.89-29.89 0-16.502 13.377-29.89 29.89-29.89z" />
        </g>
        <g fill="#f95428">
          <path d="M224.36 471.562V512h-72.095v-40.438h52.754zM359.735 471.562V512h-72.084v-40.438h52.743zM416.253 269.611v140.416h-31.885V237.725c17.61 0 31.885 14.276 31.885 31.886zM127.632 299.261v110.766H95.747V269.611c0-17.61 14.275-31.885 31.885-31.885v61.535z" />
        </g>
        <path
          d="M364.126 299.261v78.048h-23.731v-.011h-33.402v.011H205.019v-.011h-33.413v.011h-23.731V237.725h216.253v26.366l-.002 35.17z"
          fill="#2ba5f7"
        />
        <path fill="#2197d8" d="M147.874 237.725h38.043v139.572h-38.043z" />
        <g fill="#4d4d4d">
          <path d="M241.698 138.467c0-21.196-17.245-38.441-38.441-38.441-21.198 0-38.442 17.245-38.442 38.441s17.245 38.441 38.442 38.441c21.196 0 38.441-17.245 38.441-38.441zm-59.778 0c0-11.764 9.572-21.336 21.337-21.336s21.336 9.571 21.336 21.336c0 11.764-9.571 21.336-21.336 21.336s-21.337-9.572-21.337-21.336zM308.748 176.908c21.196 0 38.441-17.245 38.441-38.441s-17.245-38.441-38.441-38.441c-21.198 0-38.442 17.245-38.442 38.441s17.244 38.441 38.442 38.441zm0-59.778c11.764 0 21.335 9.571 21.335 21.336s-9.571 21.336-21.335 21.336-21.337-9.571-21.337-21.336 9.572-21.336 21.337-21.336z" />
          <circle cx={316.275} cy={271.127} r={8.553} />
          <circle cx={195.725} cy={271.127} r={8.553} />
        </g>
        <circle cx={256.006} cy={14.816} r={14.816} fill="#f7b239" />
        <path
          d="M303.469 330.906h-94.937a47.313 47.313 0 0110.149-29.342c8.701-11.039 22.181-18.132 37.325-18.132 26.217 0 47.463 21.257 47.463 47.474z"
          fill="#e09b2d"
        />
        <path
          d="M294.813 330.906h-86.282a47.313 47.313 0 0110.149-29.342 47.283 47.283 0 0129.342-10.149c23.493 0 43.005 17.071 46.791 39.491z"
          fill="#f7b239"
        />
      </svg>
    </Container>
  )
}

export default Robot
