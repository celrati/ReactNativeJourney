import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
       Authorization: 'Bearer vLbtASEbAD_rlTrcGMBr46ES5EO5DkaFpJ6_wcIay6qYUDj0MmSD9u_W3v8Gcb_DbkcnmLb2rDXJUcHTAhckSpfzSe0o5fPumqgsFhJgS1tO9XueLFgGMhh-linqXnYx' 
    }
});