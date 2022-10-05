import { Footer, Header, FormWork } from 'components'
import { getContent, MainComponent } from 'utils'

const Order = ({ common, selectors }) => {
  return (
    <>
      <Header common={common} isBorder />
      <MainComponent>
        <FormWork {...selectors} />
      </MainComponent>
      <Footer common={common} />
    </>
  )
}

export default Order

export async function getServerSideProps() {
  const data = await getContent('order')

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const { selectors, common } = data

  return {
    props: { selectors, common },
  }
}
