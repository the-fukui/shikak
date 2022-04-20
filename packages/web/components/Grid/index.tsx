import React, { useEffect, useRef } from 'react'
import style from './index.module.scss'
import Selecto, { OnDragEnd } from 'react-selecto'
import type Selecto from 'react-selecto'
import { useSetRecoilState } from 'recoil'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  containerRef,
  onDragEnd,
}) => (
  <>
    <Selecto
      container={containerRef.current}
      selectableTargets={['.' + style.block]}
      toggleContinueSelect={'shift'}
      hitRate={80}
      selectByClick={false}
      onDragEnd={onDragEnd}
      onSelect={(e) => {
        console.log({ e })
        e.added.forEach((el) => {
          el.classList.add(style.block__selected)
        })
        e.removed.forEach((el) => {
          el.classList.remove(style.block__selected)
        })
      }}
    />
    <div className={`${className} ${style.container}`} ref={containerRef}>
      {[...Array(12 * 5)].map((_, i) => (
        <div className={style.block} key={i} data-key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  </>
)

const useContainer = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const onDragEnd = (e: OnDragEnd<Selecto>) => {
    const selectedBlockKeys = e.currentTarget
    console.log(selectedBlockKeys)
  }

  const presenterProps = {
    containerRef,
    onDragEnd,
  }

  return { ...props, ...presenterProps }
}

export default function Grid(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
