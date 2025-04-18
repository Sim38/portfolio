export const codeParserRegexRules: Array<CodeParserRegexRule> = [
  {
    regex: /^\s*(export|import|const|default|from|function|for|if)\s*/, // Key words like export, import, const, default
    render: (match) => <span className="text-[#569cd6]">{match[0]}</span>,
  },

  {
    regex: /^\s*(className)\s*/, // Key words like className
    render: (match) => <span className="text-[#9cdcf0]">{match[0]}</span>,
  },

  {
    regex: /^\s*=\s*/, // =
    render: (match) => <span className="text-gray-300">{match[0]}</span>,
  },

  {
    regex: /^\s*({|}|\[|\])\s*/, // Brackets { } [ ]
    render: (match) => <span className="text-[#ffd710]">{match[0]}</span>,
  },

  {
    regex: /^\s*(\(|\))\s*/, // Brackets ( )
    render: (match) => <span className="text-[#da70b2]">{match[0]}</span>,
  },

  {
    regex: /^\s*(<|>|<\/|\/>)\s*/, // < >
    render: (match) => <span className="text-[#808080]">{match[0]}</span>,
  },

  {
    regex: /^\s*(".*"|`.*`)/, // Quotes and the content "content1 content2"
    render: (match) => <span className="text-[#ce9078]">{match[0]}</span>,
  },

  {
    regex: /^\/*\w+(?=.*?(?<!=)>)/, // Get the Tag name (The first word )
    render: (match) => <span className="text-[#569cd6]">{match[0]}</span>,
  },

  {
    regex: /^\s*(\S+)\s*/,
    render: (match) => <span className="text-gray-300">{match[0]}</span>,
  },
];
// #9cdcf0
