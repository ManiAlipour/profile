import Toastify from 'toastify-js'

const Toast = ({ text, bg = "white", color = "black" }) => {
  return Toastify({
    text,
    close: true,
    duration: 3000,
    position: "center",
    style: {
      background: bg,
      color,
    },
  }).showToast();
};

export default Toast;
