import {Footer, Header, RunningLineLink, ShopSection} from 'components'
import {getContent} from '../utils'

const Shop = ({common, products}) => {
    return (
        <>
            <Header common={common}/>
            <main>
                <ShopSection products={products}/>
                <RunningLineLink
                    mt="md"
                    outline={'true'}
                    link={'/order'}
                    titles={['LET’S TALK', 'LET’S TALK', 'LET’S TALK']}
                />
            </main>
            <Footer common={common} pt="xlg"/>
        </>
    )
}

export default Shop

export async function getServerSideProps() {
    const data = await getContent('products')

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const {common, products} = data;

    return {
        props: {common, products},
    }
}
