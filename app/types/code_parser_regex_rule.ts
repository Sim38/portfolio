interface CodeParserRegexRule {
  regex: RegExp;
  render: (match: RegExpExecArray) => React.ReactNode;
}
