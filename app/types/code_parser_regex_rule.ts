interface CodeParserRegexRule {
  regex: RegExp;
  render: (match: RegExpExecArray, key: string) => React.ReactNode;
}
