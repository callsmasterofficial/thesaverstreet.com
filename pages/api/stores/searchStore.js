import stores from "../../../data/stores";

export default (req, res) => {
  if (req.method === "GET") {
    const search = req.query.search;
    const filteredStores = stores.filter(
      (store) =>
        (store.name &&
          store.name.toLowerCase().includes(search.toLowerCase())) ||
        (store.slug && store.slug.toLowerCase().includes(search.toLowerCase()))
    );
    res
      .send(filteredStores);
  } else {
    res.status(404).json({ message: "Only GET request is allowed." });
  }
};
