import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bd71b8fef25f464fbb3e639c91b3f26b'
  }
});
