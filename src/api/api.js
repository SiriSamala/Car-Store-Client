
import axios from 'axios'
import { getToken } from '../service/auth'


const API = 'https://car-store-server.onrender.com'

const axiosInstance =axios.create({
    baseURL:API,
    
})

axiosInstance.interceptors.request.use(
    (config)=>{
        const token=getToken()
        if(token){
            config.headers.Authorization=`${token}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// // NewCarsEndPonts
// const getNewCar = () => axios.get(`${API}/newcars/all`)
// const getNewCarsCount = () => axios.get(`${API}/newcars/count`)
// const addNewCar = (newcar) => axios.post(`${API}/newcars/add`, newcar)
// const editNewCar = (newcar, id) => axios.put(`${API}/newcars/edit/${id}`, newcar)
// const deleteNewCar = (id) => axios.delete(`${API}/newcars/delete/${id}`)

// BenzCarsEndPonts
const getBenzCar = () => axios.get(`${API}/benzcars/all`)
const getBenzCarsCount = () => axiosInstance.get(`/benzcars/count`)
const addBenzCar = (benzcar) => axiosInstance.post(`${API}/benzcars/add`, benzcar)
const editBenzCar = (benzcar, id) => axiosInstance.put(`${API}/benzcars/edit/${id}`, benzcar)
const deleteBenzCar = (id) => axiosInstance.delete(`${API}/benzcars/delete/${id}`)

// BMWCarsEndPonts
const getBMWCar = () => axios.get(`${API}/bmwcars/all`)
const getBMWCarsCount = () => axiosInstance.get(`/bmwcars/count`)
const addBMWCar = (bmwcar) => axiosInstance.post(`${API}/bmwcars/add`, bmwcar)
const editBMWCar = (bmwcar, id) => axiosInstance.put(`${API}/bmwcars/edit/${id}`, bmwcar)
const deleteBMWCar = (id) => axiosInstance.delete(`${API}/bmwcars/delete/${id}`)

// HondaCarsEndPonts
const getHondaCar = () => axios.get(`${API}/hondacars/all`)
const getHondaCarsCount = () => axiosInstance.get(`/hondacars/count`)
const addHondaCar = (hondacar) => axiosInstance.post(`${API}/hondacars/add`, hondacar)
const editHondaCar = (hondacar, id) => axiosInstance.put(`${API}/hondacars/edit/${id}`, hondacar)
const deleteHondaCar = (id) => axiosInstance.delete(`${API}/hondacars/delete/${id}`)

// ToyotaCarsEndPonts
const getToyotaCar = () => axios.get(`${API}/toyotacars/all`)
const getToyotaCarsCount = () => axiosInstance.get(`/toyotacars/count`)
const addToyotaCar = (toyotacar) => axiosInstance.post(`${API}/toyotacars/add`, toyotacar)
const editToyotaCar = (toyotacar, id) => axiosInstance.put(`${API}/toyotacars/edit/${id}`, toyotacar)
const deleteToyotaCar = (id) => axiosInstance.delete(`${API}/toyotacars/delete/${id}`)

// VolkswagenCarsEndPonts
const getVolkswagenCar = () => axios.get(`${API}/volkswagencars/all`)
const getVolkswagenCarsCount = () => axiosInstance.get(`/volkswagencars/count`)
const addVolkswagenCar = (volkswagencar) => axiosInstance.post(`${API}/volkswagencars/add`, volkswagencar)
const editVolkswagenCar = (volkswagencar, id) => axiosInstance.put(`${API}/volkswagencars/edit/${id}`, volkswagencar)
const deleteVolkswagenCar = (id) => axiosInstance.delete(`${API}/volkswagencars/delete/${id}`)

// UsedCarsEndPOints
const getUsedCar = () => axios.get(`${API}/usedcars/all`)
const getUsedCarsCount = () => axiosInstance.get(`/usedcars/count`)
const addUsedCar = (usedcar) => axiosInstance.post(`${API}/usedcars/add`, usedcar)
const editUsedCar = (usedcar, id) => axiosInstance.put(`${API}/usedcars/edit/${id}`, usedcar)
const deleteUsedCar = (id) => axiosInstance.delete(`${API}/usedcars/delete/${id}`)



// OrderEndPonts
const getOrders = () => axiosInstance.get(`${API}/orders/all`)
const getOrdersCount = () => axiosInstance.get(`/orders/count`)
const deleteOrder = (id) => axiosInstance.delete(`${API}/orders/delete/${id}`)
const addOrder = (order) => axiosInstance.post('/orders/add', order)

// UserEndPoints
const getUsers = () => axiosInstance.get(`/users/all`)
const getUsersCount = () => axiosInstance.get(`/users/count`)
const addUsers = (user) => axiosInstance.post(`/users/add`,user)
const editUsers = (user,id) => axios.put(`${API}/users/edit/${id}`,user)
const deleteUsers = (id) => axios.delete(`${API}/users/delete/${id}`)
const resetpasswordUsers =(id)=>axios.put(`${API}/users/resetpassword/${id}`)

//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)



export { 
    // getNewCar, 
    getOrders,addOrder, 
    getUsers, 
    Login, 
    Register,
    // addNewCar, 
    // deleteNewCar, 
    // editNewCar, 
    addUsers, 
    editUsers, 
    deleteUsers, 
    getUsersCount, 
    // getNewCarsCount, 
    getOrdersCount,
    resetpasswordUsers,
    getUsedCar,addUsedCar,getUsedCarsCount,editUsedCar,deleteUsedCar,
    deleteOrder,
    getBenzCar,addBenzCar,deleteBenzCar,editBenzCar,getBenzCarsCount,
    getBMWCar,addBMWCar,deleteBMWCar,editBMWCar,getBMWCarsCount,
    getHondaCar,addHondaCar,deleteHondaCar,editHondaCar,getHondaCarsCount,
    getToyotaCar,addToyotaCar,deleteToyotaCar,editToyotaCar,getToyotaCarsCount,
    getVolkswagenCar,addVolkswagenCar,deleteVolkswagenCar,editVolkswagenCar,getVolkswagenCarsCount
    // getBenzCarsCount
 }