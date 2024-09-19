export const scenarios = {
    1: {
      text: "A government agency proposes a new surveillance system that uses advanced AI to monitor public spaces for security purposes. The system promises to reduce crime rates but raises concerns about privacy and civil liberties. What do you do?",
      options: {
        A: "Approve the implementation of the surveillance system",
        B: "Reject the proposal and call for a review of privacy concerns"
      },
      outcomes: {
        A: 2,
        B: 3
      }
    },
    2: {
      text: "The surveillance system is approved and implemented. What is your next step?",
      options: {
        A1: "Monitor the system's impact on crime rates and public safety",
        A2: "Assess the public’s reaction and privacy concerns"
      },
      outcomes: {
        A1: 4,
        A2: 5
      }
    },
    3: {
      text: "The proposal is rejected. What is your next step?",
      options: {
        B1: "Advocate for alternative security measures that respect privacy",
        B2: "Push for a public debate on the balance between security and privacy"
      },
      outcomes: {
        B1: 6,
        B2: 7
      }
    },
    4: {
      text: "Monitoring the system’s impact shows a significant decrease in crime rates but also an increase in public unease about privacy. What do you do?",
      options: {
        A1a1: "Implement additional measures to address privacy concerns",
        A1a2: "Continue with the current system, emphasizing its security benefits"
      },
      outcomes: {
        A1a1: 8,
        A1a2: 9
      }
    },
    5: {
      text: "Assessing the public’s reaction reveals a significant portion of the population feels their privacy is being compromised. What do you do?",
      options: {
        A2a1: "Initiate a public consultation process to find a compromise",
        A2a2: "Scale back the surveillance system while maintaining some level of monitoring"
      },
      outcomes: {
        A2a1: 10,
        A2a2: 11
      }
    },
    6: {
      text: "Advocating for alternative security measures results in the proposal of a community-based crime prevention program. What is your next step?",
      options: {
        B1a1: "Support the program and work on its implementation",
        B1a2: "Evaluate the program’s feasibility and potential drawbacks"
      },
      outcomes: {
        B1a1: 12,
        B1a2: 13
      }
    },
    7: {
      text: "Pushing for a public debate leads to a national discussion on the balance between security and privacy. What is your next step?",
      options: {
        B2a1: "Develop policy recommendations based on the debate’s outcomes",
        B2a2: "Focus on raising awareness about the importance of privacy in a democratic society"
      },
      outcomes: {
        B2a1: 14,
        B2a2: 15
      }
    },
    8: {
      text: "Additional measures to address privacy concerns are implemented, leading to a more balanced approach. The system remains effective and public trust improves.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    },
    9: {
      text: "Continuing with the current system despite privacy concerns leads to increased public protest and legal challenges. The system faces potential revisions or shutdown.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    },
    10: {
      text: "Initiating a public consultation process results in a revised system that balances security and privacy. Public acceptance improves and the system is successfully implemented.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    },
    11: {
      text: "Scaling back the surveillance system results in decreased privacy concerns but also a rise in minor crime rates. Further adjustments are needed.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    },
    12: {
      text: "Supporting the community-based crime prevention program leads to increased local engagement and reduced crime rates. The program becomes a model for other areas.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    },
    13: {
      text: "Evaluating the community-based crime prevention program reveals significant logistical challenges and limited impact. The program is restructured or abandoned.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    },
    14: {
      text: "Developing policy recommendations based on the national debate results in new laws that better balance security and privacy. The new policies are implemented successfully.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    },
    15: {
      text: "Raising awareness about privacy leads to increased public pressure on lawmakers. New policies are debated, but achieving consensus proves challenging.",
      options: {},
      outcomes: {
        // No further outcomes from this scenario
      }
    }
  };
  