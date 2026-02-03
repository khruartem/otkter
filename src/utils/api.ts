import type { FormMethod } from "react-router";

const API_KEY = "9c71d51fcdb74d66a969062225911f30";
const ipUrl = "https://api.ipify.org?format=json";

type TIpfyResponse = {
  ip: string;
};

type TVpnStatusResponse = {
  ip: string;
  security: {
    vpn: boolean;
    proxy: boolean;
    tor: boolean;
    relay: boolean;
  };
  location: {
    city: string;
    region: string;
    country: string;
    continent: string;
    region_code: string;
    country_code: string;
    continent_code: string;
    latitude: string;
    longitude: string;
    time_zone: string;
    locale_code: string;
    metro_code: string;
    is_in_european_union: boolean;
  };
  network: {
    network: string;
    autonomous_system_number: string;
    autonomous_system_organization: string;
  };
};

const config = (method: FormMethod) => {
  return {
    method,
  };
};

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getIPApi = () =>
  fetch(`${ipUrl}`, config("GET"))
    .then((res) => checkResponse<TIpfyResponse>(res))
    .then((data) => {
      return data;
    });

export const getVpnStatusApi = (ip: string) =>
  fetch(`https://vpnapi.io/api/${ip}?key=${API_KEY}`, config("GET"))
    .then((res) => checkResponse<TVpnStatusResponse>(res))
    .then((data) => {
      return data;
    });
