const calculateMatch = (scheme, answers) => {
  let total = 0;
  let matched = 0;

  const rules = scheme.eligibility;

  Object.keys(rules).forEach((key) => {
    total++;

    const ruleValue = rules[key];

    const userValue = answers[key];

    if (Array.isArray(ruleValue)) {
      if (ruleValue.includes(userValue)) {
        matched++;
      }
    } else if (typeof ruleValue === "string") {
      if (userValue === ruleValue) {
        matched++;
      }
    } else if (key === "ageMin") {
      if (Number(answers.age) >= ruleValue) {
        matched++;
      }
    } else if (key === "ageMax") {
      if (Number(answers.age) <= ruleValue) {
        matched++;
      }
    }
  });

  return Math.round((matched / total) * 100);
};

export const matchSchemes = (schemes, answers) => {
  return schemes
    .map((scheme) => {
      const matchPercentage = calculateMatch(scheme, answers);

      return {
        ...scheme,
        matchPercentage,
      };
    })

    .filter((scheme) => scheme.matchPercentage >= 50)

    .sort((a, b) => b.matchPercentage - a.matchPercentage);
};
