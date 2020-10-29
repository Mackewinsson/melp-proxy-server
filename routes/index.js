const express = require("express");
const router = express.Router();
const axios = require("axios");
const { json } = require("express");

/* GET home page. */
router.get("/api", function (req, res, next) {
  (async () => {
    try {
      const response = await axios(
        "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json"
      );
      const jsonData = response.data;
      res.status(200).json(jsonData);
    } catch (error) {
      console.error(error);
    }
  })();
});

module.exports = router;
