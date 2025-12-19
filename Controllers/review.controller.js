const Review = require("../DBSchema/review");
const messages = require("../Utilities/responseMessages");

class ReviewController {

  // ======================
  // Submit Review API
  // ======================
  async submitReview(req, res) {
    try {
      const { name, role, description, icons } = req.body;

      if (!name || !role || !description) {
        return res.status(400).json({
          message: messages.ERROR_MISSING_FIELDS || "Required fields missing"
        });
      }

      const review = await Review.create({
        name,
        role,
        description,
        icons,
        approvedByAdmin: false // admin approval later
      });

      res.status(201).json({
        message: messages.SUCCESS_REVIEW_SUBMITTED || "Review submitted successfully",
        data: review
      });

    } catch (error) {
      console.error("Submit Review Error:", error);
      res.status(500).json({
        message: messages.ERROR_INTERNAL_SERVER
      });
    }
  }

  // ======================
  // Get Reviews API
  // ======================
  async getReviews(req, res) {
    try {
      // Only approved reviews for frontend
      const reviews = await Review.find({ approvedByAdmin: true })
        .sort({ createdAt: -1 });

      res.status(200).json({
        message: messages.SUCCESS_REVIEW_FETCHED || "Reviews fetched successfully",
        data: reviews
      });

    } catch (error) {
      console.error("Get Reviews Error:", error);
      res.status(500).json({
        message: messages.ERROR_INTERNAL_SERVER
      });
    }
  }

  // ======================
  // (Optional) Admin API
  // ======================
  async approveReview(req, res) {
    try {
      const { id } = req.params;

      const review = await Review.findByIdAndUpdate(
        id,
        { approvedByAdmin: true },
        { new: true }
      );

      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }

      res.status(200).json({
        message: "Review approved successfully",
        data: review
      });

    } catch (error) {
      console.error("Approve Review Error:", error);
      res.status(500).json({
        message: messages.ERROR_INTERNAL_SERVER
      });
    }
  }
}

module.exports = new ReviewController();
