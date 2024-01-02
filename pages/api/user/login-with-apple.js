import NodeRSA from "node-rsa";
import axios from "axios";
import jsonwebtoken from "jsonwebtoken";

async function _getApplePublicKeys() {
  return axios
    .request({
      method: "GET",
      url: "https://appleid.apple.com/auth/keys",
    })
    .then((response) => response.data.keys);
}

const getAppleUserId = async (token) => {
  const keys = await _getApplePublicKeys();
  const decodedToken = await jsonwebtoken.decode(token, { complete: true });
  const kid = await decodedToken.header.kid;
  const key = await keys.find((k) => k.kid === kid);
  const pubKey = new NodeRSA();
  pubKey.importKey(
    { n: Buffer.from(key.n, "base64"), e: Buffer.from(key.e, "base64") },
    "components-public"
  );

  const userKey = pubKey.exportKey(["public"]);
  return jsonwebtoken.verify(token, userKey, {
    algorithms: "RS256",
  });
};

export default async function (req, res) {
  if (req.method === "POST") {
    try {
      const user = await getAppleUserId(req.body.tokenId);
      res.status(200).json({ userData: user });
    } catch (err) {
      res.status(500).json({ message: "Manual Error", err });
    }
  }
}
