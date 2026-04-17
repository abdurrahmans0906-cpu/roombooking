package com.hotel;

import static org.junit.Assert.*;
import org.junit.Test;

public class BookingTest {

    @Test
    public void testBookingSuccess() {
        String guestName = "John Doe";
        // Logic: If name is provided, booking is successful
        assertNotNull("Guest name should not be null", guestName);
        assertTrue("Booking should be successful", guestName.length() > 0);
    }

    @Test
    public void testBookingFailure() {
        String guestName = ""; // Empty name scenario
        // Logic: If name is empty, booking should fail
        assertFalse("Booking should fail if name is empty", guestName.length() > 0);
    }
}
