import { Footer, Header, RunningLineLink, ShopSection } from 'components'
import { getContent, getDimensions } from '../utils'

const Projects = ({ products }) => {
  return (
    <>
      <Header />
      <main>
        <ShopSection products={products} />
        <RunningLineLink
          mt="md"
          outline={'true'}
          link={'/order'}
          titles={['LET’S TALK', 'LET’S TALK', 'LET’S TALK']}
        />
      </main>
      <Footer pt="xlg" />
    </>
  )
}

export default Projects

export async function getServerSideProps(context) {
  const products = await getContent('products')

  if (!products) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { products },
  }
}
