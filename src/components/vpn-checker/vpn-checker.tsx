import { FC, useEffect, useState } from "react";

import { VpnCheckerUI } from "../ui/vpn-checker";

import { getIPApi, getVpnStatusApi } from "../../utils/api";
import { TAlert } from "../../utils/types/alert";
import { Colors } from "../../utils/types";

export const VpnChecker: FC = () => {
  const [isVpnActive, setIsVpnActive] = useState(false);

  useEffect(() => {
    async function getVpnStatus() {
      try {
        const ip = (await getIPApi()).ip;
        const vpnStatus = await getVpnStatusApi(ip);

        setIsVpnActive(vpnStatus.security.vpn);
      } catch (error) {
        console.error("Error fetching VPN status:", error);
      }
    }

    getVpnStatus();

    const intervalId = setInterval(() => {
      setIsVpnActive(false);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const vpnAlert: TAlert = {
    category: {
      text: "Из-за VPN могут быть ошибки",
      icon: "alert",
    },
    colors: {
      icon: Colors.Error100,
      background: Colors.Light100,
      text: Colors.Navy,
    },
  };

  return <VpnCheckerUI alert={vpnAlert} active={isVpnActive} />;
};
