import makeApiRequest from "../../../infrastructure/services/makeApiRequest";
import StatsType from "../model/statsType";

const getStats = async (year: number | string) => {
  const { responseBody, responseStatus, responseError } = await makeApiRequest(
    "get",
    `admin/dataCount/${year}`
  );

  if (responseError || responseStatus?.isError) {
    return {
      isError: true,
      message: responseError ? responseError.message : responseStatus.message,
      code: responseStatus ? responseStatus.code : undefined,
    };
  } else {
    const stats: StatsType = responseBody.data;

    return {
      isError: false,
      stats: stats,
    };
  }
};

export default getStats;
