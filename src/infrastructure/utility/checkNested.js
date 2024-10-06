export const checkNested = (obj, prop, ...restProps) => {
    if (obj === undefined) {
        return false;
    }
    if (
        restProps.length === 0 &&
        Object.prototype.hasOwnProperty.call(obj, prop)
        &&
        obj[prop]
    ) {
        return true;
    }
    return checkNested(obj[prop], ...restProps);
};
// usage example
// const createdUser = {
//     response: {
//         data: {
//             status: 1,
//             success: "Done",
//         },
//     },
// };
// checkNested(createdUser, ...API_SUCCESS_TYPE)

//  const errorResponse = {
//   response: {
//     data: {
//       error: {
//         message: "Something went wrong",
//       },
//     },
//   },
// };
// checkNested(errorResponse, ...API_ERROR_TYPE)