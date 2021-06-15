import Axios from "axios"
class CourseServices {
    fetchProduct(){
        return Axios({
            method:"GET",
            url:"http://localhost:5000/",
        })
    }
    fetchDetail(id){
        return Axios({
            method:"GET",
            url:`http://localhost:5000/find/detail/${id}`,
        })
    }
}
export default CourseServices;