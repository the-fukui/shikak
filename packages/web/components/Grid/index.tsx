import React, { useEffect, useRef } from 'react'
import style from './index.module.scss'
import Selecto from 'react-selecto'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({ className = '', containerRef }) => (
  <>
    <Selecto
      container={containerRef.current}
      selectableTargets={['.' + style.shikak]}
      toggleContinueSelect={'shift'}
      hitRate={80}
      selectByClick={false}
      onSelect={(e) => {
        console.log({ e })
        e.added.forEach((el) => {
          el.classList.add(style.shikak__selected)
        })
        e.removed.forEach((el) => {
          el.classList.remove(style.shikak__selected)
        })
      }}
    />
    <div className={`${className} ${style.container}`} ref={containerRef}>
      {[...Array(3)].map((_, i) => (
        <div className={style.shikak} key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  </>
)

const useContainer = (props: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const presenterProps = {
    containerRef,
  }

  return { ...props, ...presenterProps }
}

export default function Grid(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
