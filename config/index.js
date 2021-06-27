const siteMetadata = {
  siteUrl: "https://know.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "你应该知道的事",
  shortTitle: "常识",
  description: "用中文浏览 Reddit小组 You Should Know 的热门内容",
  keywords: ["buzzing", "常识", "你应该知道", "You Should Know"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://news.buzzing.cc/avatar.png",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `You Should Know`,
      url: `https://www.reddit.com/r/YouShouldKnow`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on You Should Know`,
      shortTitle: "BuzzNews",
      description: `See what's buzzing on You Should Know in your native language`,
      keywords: ["buzzing", "You Should Know", "Common Sense"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "你應該知道的事",
      shortTitle: "常識",
      description: "用中文瀏覽 Reddit小組 You Should Know 的熱門內容",
      keywords: ["buzzing", "常識", "你應該知道", "You Should Know"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
      ],
    },
    {
      locale: "ja",
      title: "知っておくべきこと",
      shortTitle: "知っておくべきこと",
      description: "人気の知っておくべきことを日本語で閲覧",
      keywords: ["buzzing", "知っておくべきこと",],
      menuLinks: [
   
      ],
    }
  ],
};

module.exports = {
  siteMetadata,
};
