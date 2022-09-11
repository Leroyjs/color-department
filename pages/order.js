import {Footer, Header, FormWork,} from "components";
import {getContent, MainComponent} from "utils";

const Order = ({selectors}) => {
    return (
        <>
            <Header/>
            <MainComponent>
                <FormWork {...selectors}/>
            </MainComponent>
            <Footer/>
        </>
    );
};

export default Order;

export async function getServerSideProps(context) {
    const {
        selectors
    } = await getContent('order')

    if (!selectors) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {selectors},
    }
}
