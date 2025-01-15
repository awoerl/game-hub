import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bd71b8fef25f464fbb3e639c91b3f26b'
  }
})

class APIClient<T> {
  endpoint: string;
  
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async () => {
    const res = await axiosInstance.get<T[]>(this.endpoint);
    return res.data;
  }
 
  post = async (data: T) => {
    const res = await axiosInstance
      .post<T>(this.endpoint, data);
    return res.data;
  }
}

export default APIClient;