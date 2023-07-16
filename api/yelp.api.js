import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer C1gny1TfoP3di0l7YyhfcjZEPcxfoCwqNm5yt2ppVoigkCusH9ibaRt8fTDsBODp1wRRuJi75NuuT_LcuHGcJERGjm9xhBvc5_Is1NJswLHu-Y8SuKfy8O740qGbZHYx",
  },
});
