import { useEffect } from "react";

interface ActivityMonitorProps {
  onSuspiciousActivity: (activity: string) => void;
}

const ActivityMonitor = ({ onSuspiciousActivity }: ActivityMonitorProps) => {
  useEffect(() => {
    let lastActiveTime = Date.now();
    let isHidden = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isHidden = true;
        onSuspiciousActivity("Tab switched/window minimized");
      } else {
        isHidden = false;
      }
    };

    const handleUserActivity = () => {
      lastActiveTime = Date.now();
    };

    const checkInactivity = () => {
      const inactiveTime = Date.now() - lastActiveTime;
      if (inactiveTime > 30000 && !isHidden) { // 30 seconds
        onSuspiciousActivity("User inactivity detected");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("keypress", handleUserActivity);

    const inactivityInterval = setInterval(checkInactivity, 10000);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keypress", handleUserActivity);
      clearInterval(inactivityInterval);
    };
  }, [onSuspiciousActivity]);

  return null;
};

export default ActivityMonitor;