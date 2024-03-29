import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'

const Grid = dynamic(() => import('@web/components/Grid'), { ssr: false })

type ContainerProps = InferGetStaticPropsType<typeof getStaticProps>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({}) => (
  <div>
    <Grid />
  </div>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const presenterProps = {}
  return { ...props, ...presenterProps }
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
    revalidate: 60,
  }
}

export default function Test(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
