// import { useRef, useState } from "react";
import { Header, Footer, Modal, WorkModal, FormWork,} from "components";
import "styles/global.style";

const Order = () => {
  //   const [value, setValue] = useState(null);
  //   const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <main>
        <FormWork />
        <WorkModal />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Order;
