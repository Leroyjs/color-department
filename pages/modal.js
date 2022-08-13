
import {Modal} from "components";

const ModalPage = () => {
    return (
        <div>
            <Modal isOpen={true}>
                <div style={{width: '100%', height: '100%', backgroundColor: 'rebeccapurple'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi cupiditate delectus
                    dignissimos eaque enim error eveniet excepturi explicabo ipsam libero magnam nihil non quae
                    quibusdam, recusandae sequi tempore vitae.
                </div>
            </Modal>
        </div>
    );
};

export default ModalPage;
