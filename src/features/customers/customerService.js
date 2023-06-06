import axios from "axios";
import { base_url } from "../../utils/base_url";

const getusers = async () => {
  const response = await axios.get(`${base_url}user/all-users`);
  return response.data;
};
const customerService = {
  getusers,
};
export default customerService;
