export function mapStatus(status: string | number): string {
  if (typeof status === "number") {
    // Handle numeric status values here
    switch (status) {
      case 1:
        return "success";
      case 2:
        return "error";
      case 3:
        return "attention";
      case 4:
        return "caution";
      case 5:
        return "available";
      case 6:
        return "unavailable";
      default:
        return "available";
    }
  }

  if (typeof status === "string") {
    // Handle string status values here
    const statusString = status.toLowerCase();
    if (statusString === "1" || statusString === "success") {
      return "success";
    } else if (statusString === "2" || statusString === "error") {
      return "error";
    } else if (statusString === "3" || statusString === "attention") {
      return "attention";
    } else if (statusString === "4" || statusString === "caution") {
      return "caution";
    } else if (statusString === "5" || statusString === "available") {
      return "available";
    } else if (statusString === "6" || statusString === "unavailable") {
      return "unavailable";
    }
  }

  if (typeof status === "undefined") {
    return "available";
  }

  return "available";
}
