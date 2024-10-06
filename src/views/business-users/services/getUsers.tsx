import makeApiRequest from "../../../infrastructure/services/makeApiRequest";
import UserType from "../model/userType";

const getUsers = async (limit, currentPage, search) => {
  const { responseBody, responseStatus, responseError } = await makeApiRequest(
    "get",
    `admin/getUsers?page=${currentPage}&limit=${limit}`
  );

  if (responseError || responseStatus?.isError) {
    return {
      isError: true,
      message: responseError ? responseError.message : responseStatus.message,
      code: responseStatus ? responseStatus.code : undefined,
    };
  } else {
    const users: UserType[] = responseBody.users.users.map((user: any) => ({
      id: user._id,
      firstName: user.name,
      lastName: user.lastName,
      email: user.email,
      status: user.status,
    }));

    return {
      isError: false,
      users: users,
      totalCount: responseBody.users.totalUsers,
    };
  }
};

export default getUsers;
