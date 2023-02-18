import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Showsuccess(data) {
  toast.success(data, {
    theme: "dark",
    position: toast.POSITION.LEFT_RIGHT,
  });
}

function Showerror(data) {
  toast.error(data, {
    theme: "dark",
    //position: toast.POSITION.TOP_CENTER,
    position: "top-center",
    closeOnClick:true

  });
}

function Showwarn(data) {
  toast.warn(data, {
    theme: "dark",
    position: toast.POSITION.LEFT_RIGHT,
  });
}

function Showinfo(data) {
  toast.info(data, {
    theme: "dark",
    position: toast.POSITION.LEFT_RIGHT,
    closeOnClick:true
  });
}
const orderPlacedMessage = (data) => {
  toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
      closeOnClick:true
  });
};
const Toster = {
  Showsuccess,
  Showinfo,
  Showwarn,
  Showerror,
  orderPlacedMessage
};

export default Toster;
