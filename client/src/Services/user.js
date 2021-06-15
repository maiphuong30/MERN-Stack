import axios from "axios";
import * as yup from "yup";
export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Field is Required!"),
  matKhau: yup.string().required("* Field is Required!"),
  hoTen: yup.string().required("* Field is Required!"),
  email: yup
    .string()
    .required("* Field is Required!")
    .email("* Email is invalid"),
  soDT: yup.string().required("* Field is Required!"),
  maNhom: yup.string().required("* Field is Required!"),
});
class UserServices {
  signUp(data) {
    return axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data,
    });
  }
  signIn(user) {
    return axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    });
  }
}
export default UserServices;
