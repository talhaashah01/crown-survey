import makeApiRequest from "../../../infrastructure/services/makeApiRequest";
import BookingType from "../model/bookingType";

const getBookings = async (limit, currentPage, search) => {
  const { responseBody, responseStatus, responseError } = await makeApiRequest(
    "get",
    `admin/getBookings?page=${currentPage}&limit=${limit}`
  );

  if (responseError || responseStatus?.isError) {
    return {
      isError: true,
      message: responseError ? responseError.message : responseStatus.message,
      code: responseStatus ? responseStatus.code : undefined,
    };
  } else {
    const bookings: BookingType[] = responseBody.bookings.bookings.map(
      (booking: any) => {
        const totalPrice = booking.flight.travelerPricings.reduce(
          (sum, traveler) => sum + parseFloat(traveler.price.total),
          0
        );

        return {
          id: booking._id,
          userId: booking.userId,
          bookingId: booking.bookingDetails?.data?.id || "-",
          status: booking.bookingDetails ? "confirmed" : "pending",
          travellersCount: booking.travelers.length,
          totalPrice: totalPrice.toFixed(2), 
        };
      }
    );

    return {
      isError: false,
      bookings: bookings,
      totalCount: responseBody.bookings.bookingsCount,
    };
  }
};

export default getBookings;
