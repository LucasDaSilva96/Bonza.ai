// Som receptionist vill jag kunna se alla bokningar som gjorts för att få en överblick över hur beläggningen av hotellet ser ut.

const { db } =requier('./services/db.js');

module.exports.handler = async (event) => {
  const params = {
    TableName: 'booking-db',  // DynamoDB-tabellen för bokningar
  };

  try {
    const data = await db.scan(params).promise(); // Skannar tabellen
   return sendResponse(data.Items);
  } catch (err) {
    console.error('Error scanning table:', err);
   return sendError(500, 'Could not retrive bookings')
  }
};
