// Som receptionist vill jag kunna se alla bokningar som gjorts för att få en överblick över hur beläggningen av hotellet ser ut.

exports.handler = async (event, context) => {
  console.log('Hello, world!');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, world!' }),
  };
};