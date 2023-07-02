const { HttpsProxyAgent } = require("https-proxy-agent");
const { OpenAI } = require("langchain/llms/openai");
const dotenv = require("dotenv");
dotenv.config();

// https://github.com/openai/openai-node/issues/85
// https://github.com/hwchase17/langchainjs/issues/1454
const proxy = new HttpsProxyAgent("http://127.0.0.1:1091")
exports.run = async () => {
  const model = new OpenAI(
    {temperature: 0.9},
    {
      baseOptions: {proxy: false, httpAgent: proxy, httpsAgent: proxy}
    }
  );
  const res = await model.call("What would be a good company name a company that makes colorful socks?")
  console.log({res})
};

exports.run();