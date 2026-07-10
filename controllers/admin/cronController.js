const cronJob = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Cron job executed successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

module.exports = {
  cronJob
};