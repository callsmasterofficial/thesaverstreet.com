import stores from "../../../data/stores";

export default (req, res) => {
  if (req.method === "GET") {
    const page = req.query.page || 0;
    const initialIndex = page * 30;
    res
      .status(200)
      .json({ stores: stores.slice(initialIndex, initialIndex + 30) });
  } else {
    res.status(404).json({ message: "Only get request is allowed." });
  }
};
