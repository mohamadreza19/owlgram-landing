import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  AllLanguagesResponse,
  ClientInfoResponse,
  FindIpResponse,
  LocationInfo,
  OsDownloadsResponse,
  QuestionAnswerResponse,
  ServicesResponse,
  TeamsResponse,
} from "../shared";
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
  static getOsDownloadsByIdLanguageId = async (
    language_id: string
  ): Promise<OsDownloadsResponse> => {
    return (await this.$axios.get("getDownload?language_id=" + language_id))
      .data;
  };
  static getTeamByLanguageId = async (
    language_id: string
  ): Promise<TeamsResponse> => {
    return (await this.$axios.get("getTeam?language_id=" + language_id)).data;
  };
  static getQuestionAnswerByLanguageId = async (
    language_id: string
  ): Promise<QuestionAnswerResponse> => {
    return (await this.$axios.get("questionAnswer?language_id=" + language_id))
      .data;
  };
  static getUserInfo = async (): Promise<ClientInfoResponse> => {
    let userInfo: ClientInfoResponse = {
      countryNameInEn: "",
      ip: "",
      flag: "",
    };
    // Get Ip
    const userIpInfo = (await this.$axios.get("https://api.country.is"))
      .data as FindIpResponse;
    // Get Country Flag By Code
    // const countryFlag = (
    //   await this.$axios.get(
    //     `https://purecatamphetamine.github.io/country-flag-icons/3x2/${userIpInfo.country}.svg`
    //   )
    // ).data as string;
    //  Get Country Info By Id
    const locationInfoInfo = (
      await this.$axios.get(`https://freeipapi.com/api/json/${userIpInfo.ip}`)
    ).data as LocationInfo;

    // Collect data to  userInfo_OBJ
    userInfo.ip = userIpInfo.ip;
    userInfo.flag = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${userIpInfo.country}.svg`;
    userInfo.countryNameInEn = locationInfoInfo.countryName;

    return userInfo;
  };
}

export default ApiCallService;
