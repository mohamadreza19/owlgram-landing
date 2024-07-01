import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { AllLanguagesResponse, ServicesResponse } from "../shared";
export const queryClient = new QueryClient();
const base_url = "https://owlegram.com:2053/";
class ApiCallService {
  private static queryClient = queryClient;
  private static $axios = axios.create({
    baseURL: base_url,
  });

  static getAllLanguages = async (): Promise<AllLanguagesResponse> => {
    return (await this.$axios.get("getAllLanguage")).data;
  };
  static getServiceByIdLanguageId = async (
    language_id: string
  ): Promise<ServicesResponse> => {
    return (await this.$axios.get("getService?language_id=" + language_id))
      .data;
  };
}

export default ApiCallService;
