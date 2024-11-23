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

    const preventCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      onSuspiciousActivity("Copy-paste attempt detected");
    };

    const preventPrintScreen = (e: KeyboardEvent) => {
      if (
        e.key === 'PrintScreen' || 
        (e.key === 'p' && (e.ctrlKey || e.metaKey)) ||
        (e.key === 'P' && (e.ctrlKey || e.metaKey)) ||
        (e.key === 'c' && (e.ctrlKey || e.metaKey)) ||
        (e.key === 'C' && (e.ctrlKey || e.metaKey))
      ) {
        e.preventDefault();
        onSuspiciousActivity("Print screen or copy attempt detected");
      }
    };

    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      onSuspiciousActivity("Right-click attempt detected");
    };

    const checkInactivity = () => {
      const inactiveTime = Date.now() - lastActiveTime;
      if (inactiveTime > 30000 && !isHidden) { // 30 seconds
        onSuspiciousActivity("User inactivity detected");
      }
    };

    // Add event listeners for security measures
    document.addEventListener('copy', preventCopyPaste);
    document.addEventListener('paste', preventCopyPaste);
    document.addEventListener('cut', preventCopyPaste);
    document.addEventListener('keydown', preventPrintScreen);
    document.addEventListener('contextmenu', preventContextMenu);

    // Existing event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("keypress", handleUserActivity);

    const inactivityInterval = setInterval(checkInactivity, 10000);

    // CSS to prevent text selection
    const style = document.createElement('style');
    style.innerHTML = `
      .quiz-content {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Remove all event listeners
      document.removeEventListener('copy', preventCopyPaste);
      document.removeEventListener('paste', preventCopyPaste);
      document.removeEventListener('cut', preventCopyPaste);
      document.removeEventListener('keydown', preventPrintScreen);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keypress", handleUserActivity);
      clearInterval(inactivityInterval);
      document.head.removeChild(style);
    };
  }, [onSuspiciousActivity]);

  return null;
};

export default ActivityMonitor;
