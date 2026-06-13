const College = require("../models/College");

// ✅ Fetch all colleges
exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (err) {
    console.error("❌ Error fetching colleges:", err);
    res.status(500).json({ error: "Failed to fetch colleges" });
  }
};

// ✅ Fetch eligible colleges based on score, category & branch
exports.getEligibleColleges = async (req, res) => {
  try {
    const { score, category, branch } = req.query;

    if (!score || !category) {
      return res.status(400).json({ error: "Score and category are required" });
    }

    const numericScore = parseFloat(score);

    // Fetch all colleges
    const colleges = await College.find();

    // Map and filter colleges to return only eligible branches for each college
    const eligibleColleges = colleges.map(col => {
      // Filter branches of this college that match the score, category, and preferred branch
      const eligibleBranches = col.branches.filter(b => {
        // Cutoff check
        const cutoff = b.cutoffs ? b.cutoffs[category] : undefined;
        const isScoreEligible = cutoff !== undefined ? numericScore >= cutoff : true;

        if (!isScoreEligible) return false;
        if (!branch || branch === "All") return true;

        const branchName = b.name.toLowerCase();
        const query = branch.toLowerCase();
        if (query === 'cs') {
          return branchName.includes('computer') || branchName.includes('cs');
        }
        if (query === 'entc') {
          return branchName.includes('electronics') || branchName.includes('e&tc') || branchName.includes('entc');
        }
        if (query === 'ai & ds') {
          return branchName.includes('artificial intelligence') || branchName.includes('ai & ds') || branchName.includes('data science') || branchName.includes('ai');
        }
        return branchName.includes(query);
      });

      if (eligibleBranches.length > 0) {
        // Convert Mongoose doc to plain JS object to edit properties
        const plainCol = col.toObject();
        return {
          ...plainCol,
          eligibleBranches: eligibleBranches // return only eligible branches
        };
      }
      return null;
    }).filter(col => col !== null);

    res.status(200).json(eligibleColleges);
  } catch (err) {
    console.error("❌ Error fetching eligible colleges:", err);
    res.status(500).json({ error: "Failed to fetch eligible colleges" });
  }
};
