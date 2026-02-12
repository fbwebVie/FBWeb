export type Dictionary = {
  nav: {
    services: string;
    demos: string;
    about: string;
    contact: string;
  };
  hero: {
    available: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    techStack: string;
    design: {
      title: string;
      description: string;
    };
    development: {
      title: string;
      description: string;
    };
    landingpages: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewAll: string;
    items: {
      restaurant: { title: string; description: string };
      portfolio: { title: string; description: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    or: string;
  };
  projectsPage: {
    title: string;
    subtitle: string;
    items: {
      restaurant: { title: string; description: string };
      portfolio: { title: string; description: string };
      landingpage: { title: string; description: string };
      blog: { title: string; description: string };
    };
  };
  servicesPage: {
    title: string;
    subtitle: string;
    services: {
      design: {
        title: string;
        description: string;
        features: {
          ui: string;
          responsive: string;
          prototype: string;
        };
      };
      development: {
        title: string;
        description: string;
        features: {
          nextjs: string;
          performance: string;
          seo: string;
        };
      };
      landingpages: {
        title: string;
        description: string;
        features: {
          conversion: string;
          speed: string;
          testing: string;
        };
      };
    };
    process: {
      title: string;
      subtitle: string;
      steps: {
        discovery: { title: string; description: string };
        design: { title: string; description: string };
        review: { title: string; description: string };
        launch: { title: string; description: string };
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  aboutPage: {
    title: string;
    subtitle: string;
    location: string;
    intro: string;
    bio: string[];
    stats: {
      experience: { value: string; label: string };
      projects: { value: string; label: string };
      clients: { value: string; label: string };
    };
    cta: string;
  };
  imprint: {
    title: string;
    info: string;
    contact: string;
    vat: string;
    responsible: string;
    disclaimer: {
      title: string;
      content: string;
    };
  };
  privacy: {
    title: string;
    intro: { title: string; content: string };
    hosting: { title: string; content: string };
    cookies: { title: string; content: string };
    contact: { title: string; content: string };
    rights: { title: string; content: string };
  };
  footer: {
    rights: string;
    imprint: string;
    privacy: string;
    available: string;
    navigation: string;
    legal: string;
    social: string;
  };
};

export type Lang = "de" | "en";

const dictionaries: Record<Lang, Dictionary> = {
  de: {
    nav: {
      services: "Leistungen",
      demos: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
    },
    hero: {
      available: "Verfügbar für neue Projekte",
      headline: "Deine Vision.",
      headlineAccent: "Mein Code.",
      subheadline:
        "Freelance Webdesigner & Entwickler aus Wien. Ich baue moderne Websites die gut aussehen und Ergebnisse liefern.",
      cta: "Projekte ansehen",
      ctaSecondary: "Kontakt",
    },
    services: {
      title: "Was ich mache",
      subtitle: "Von der Idee bis zum Launch – alles aus einer Hand.",
      techStack: "Mein Tech Stack",
      design: {
        title: "Webdesign",
        description:
          "Modernes UI/UX Design das nicht nur gut aussieht, sondern auch konvertiert. Responsive und für alle Geräte optimiert.",
      },
      development: {
        title: "Entwicklung",
        description:
          "Sauberer, schneller Code mit den neuesten Technologien. Performance und SEO von Anfang an.",
      },
      landingpages: {
        title: "Landing Pages",
        description:
          "Conversion-optimierte Seiten die Besucher zu Kunden machen. Schnell, fokussiert und effektiv.",
      },
    },
    projects: {
      title: "Meine Projekte",
      subtitle: "Ausgewählte Arbeiten die zeigen was ich kann.",
      viewAll: "Alle Projekte ansehen",
      items: {
        restaurant: {
          title: "Bella Vista Restaurant",
          description:
            "Moderne Website für ein italienisches Restaurant mit Speisekarte und Kontaktformular.",
        },
        portfolio: {
          title: "Fotografen Portfolio",
          description:
            "Minimalistisches Portfolio mit Fokus auf visuelle Präsentation.",
        },
      },
    },
    contact: {
      title: "Projekt im Kopf?",
      subtitle: "Lass uns reden.",
      or: "oder schreib mir auf",
    },
    projectsPage: {
      title: "Meine Projekte",
      subtitle: "Eine Auswahl meiner bisherigen Arbeiten.",
      items: {
        restaurant: {
          title: "Bella Vista Restaurant",
          description:
            "Moderne Website für ein italienisches Restaurant mit Speisekarte und Kontaktformular.",
        },
        portfolio: {
          title: "Fotografen Portfolio",
          description:
            "Minimalistisches Portfolio mit eleganten Animationen und Galerie.",
        },
        landingpage: {
          title: "Startup Landing Page",
          description:
            "Conversion-optimierte Landing Page für ein Tech-Startup.",
        },
        blog: {
          title: "Minimalist Blog",
          description: "Cleaner Blog mit Fokus auf Lesbarkeit und Performance.",
        },
      },
    },
    servicesPage: {
      title: "Meine Leistungen",
      subtitle: "Webentwicklung – von der Idee bis zum Launch.",
      services: {
        design: {
          title: "Webdesign",
          description:
            "Modernes UI/UX Design das nicht nur gut aussieht, sondern auch konvertiert.",
          features: {
            ui: "Individuelles UI/UX Design",
            responsive: "Responsive für alle Geräte",
            prototype: "Interaktive Prototypen",
          },
        },
        development: {
          title: "Entwicklung",
          description:
            "Sauberer, schneller Code mit den neuesten Technologien.",
          features: {
            nextjs: "Next.js & React",
            performance: "Optimale Performance",
            seo: "SEO-optimiert",
          },
        },
        landingpages: {
          title: "Landing Pages",
          description:
            "Conversion-optimierte Seiten die Besucher zu Kunden machen.",
          features: {
            conversion: "Conversion-fokussiert",
            speed: "Schnelle Ladezeiten",
            testing: "A/B Testing ready",
          },
        },
      },
      process: {
        title: "Mein Prozess",
        subtitle: "So arbeite ich – transparent und effizient.",
        steps: {
          discovery: {
            title: "Discovery",
            description:
              "Wir besprechen deine Vision, Ziele und Anforderungen.",
          },
          design: {
            title: "Design & Entwicklung",
            description: "Ich erstelle das Design und entwickle deine Website.",
          },
          review: {
            title: "Review & Feinschliff",
            description:
              "Du bekommst eine Demo. Wir verfeinern gemeinsam die Details.",
          },
          launch: {
            title: "Launch",
            description:
              "Deine Website geht live. Ich übergebe dir alle Zugänge.",
          },
        },
      },
      cta: {
        title: "Bereit zu starten?",
        subtitle: "Lass uns über dein Projekt sprechen.",
        button: "Kontakt aufnehmen",
      },
    },
    aboutPage: {
      title: "Über Mich",
      subtitle: "Die Person hinter den Pixeln",
      location: "Wien, Österreich",
      intro:
        "Hi, ich bin FBWebVie – Freelance Webdesigner und Entwickler aus Wien.",
      bio: [
        "Ich helfe Unternehmen und Selbstständigen dabei, online professionell aufzutreten mit modernen, schnellen und benutzerfreundlichen Websites.",
        "Von der ersten Idee bis zur fertigen Website – alles aus einer Hand. Keine Agenturen, keine Zwischenhändler, nur direkte Zusammenarbeit.",
        "Mein Fokus liegt auf cleanem Design, solidem Code und Websites die tatsächlich Ergebnisse für meine Kunden erzielen.",
      ],
      stats: {
        experience: {
          value: "2+",
          label: "Jahre Erfahrung",
        },
        projects: {
          value: "10+",
          label: "Projekte",
        },
        clients: {
          value: "100%",
          label: "Zufriedenheit",
        },
      },
      cta: "Lass uns zusammenarbeiten",
    },
    imprint: {
      title: "Impressum",
      info: "Angaben gemäß § 5 ECG",
      contact: "Kontakt",
      vat: "Umsatzsteuer-ID",
      responsible: "Verantwortlich für den Inhalt",
      disclaimer: {
        title: "Haftungsausschluss",
        content:
          "Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.",
      },
    },
    privacy: {
      title: "Datenschutz",
      intro: {
        title: "Einleitung",
        content:
          "Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten auf meiner Website.",
      },
      hosting: {
        title: "Hosting",
        content:
          "Meine Website wird bei Netlify gehostet. Beim Besuch meiner Website werden automatisch Informationen in Server-Log-Dateien gespeichert, die Ihr Browser automatisch übermittelt.",
      },
      cookies: {
        title: "Cookies",
        content:
          "Meine Website verwendet keine Tracking-Cookies. Es werden nur technisch notwendige Cookies verwendet.",
      },
      contact: {
        title: "Kontaktaufnahme",
        content:
          "Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.",
      },
      rights: {
        title: "Ihre Rechte",
        content:
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Bei Fragen wenden Sie sich an fbwebvie@hotmail.com.",
      },
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
      available: "Verfügbar für Projekte",
      navigation: "Navigation",
      legal: "Rechtliches",
      social: "Social",
    },
  },
  en: {
    nav: {
      services: "Services",
      demos: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      available: "Available for new projects",
      headline: "Your Vision.",
      headlineAccent: "My Code.",
      subheadline:
        "Freelance web designer & developer from Vienna. I build modern websites that look great and deliver results.",
      cta: "View Projects",
      ctaSecondary: "Contact",
    },
    services: {
      title: "What I Do",
      subtitle: "From idea to launch – everything from one source.",
      techStack: "My Tech Stack",
      design: {
        title: "Web Design",
        description:
          "Modern UI/UX design that not only looks good but converts. Responsive and optimized for all devices.",
      },
      development: {
        title: "Development",
        description:
          "Clean, fast code with the latest technologies. Performance and SEO from the start.",
      },
      landingpages: {
        title: "Landing Pages",
        description:
          "Conversion-optimized pages that turn visitors into customers. Fast, focused and effective.",
      },
    },
    projects: {
      title: "My Projects",
      subtitle: "Selected work that shows what I can do.",
      viewAll: "View all projects",
      items: {
        restaurant: {
          title: "Bella Vista Restaurant",
          description:
            "Modern website for an Italian restaurant with menu and contact form.",
        },
        portfolio: {
          title: "Photographer Portfolio",
          description: "Minimalist portfolio focused on visual presentation.",
        },
      },
    },
    contact: {
      title: "Got a project?",
      subtitle: "Let's talk.",
      or: "or reach out on",
    },
    projectsPage: {
      title: "My Projects",
      subtitle: "A selection of my recent work.",
      items: {
        restaurant: {
          title: "Bella Vista Restaurant",
          description:
            "Modern website for an Italian restaurant with menu and contact form.",
        },
        portfolio: {
          title: "Photographer Portfolio",
          description:
            "Minimalist portfolio with elegant animations and gallery.",
        },
        landingpage: {
          title: "Startup Landing Page",
          description: "Conversion-optimized landing page for a tech startup.",
        },
        blog: {
          title: "Minimalist Blog",
          description: "Clean blog focused on readability and performance.",
        },
      },
    },
    servicesPage: {
      title: "My Services",
      subtitle: "Web development – from idea to launch.",
      services: {
        design: {
          title: "Web Design",
          description:
            "Modern UI/UX design that not only looks good but converts.",
          features: {
            ui: "Custom UI/UX Design",
            responsive: "Responsive for all devices",
            prototype: "Interactive prototypes",
          },
        },
        development: {
          title: "Development",
          description: "Clean, fast code with the latest technologies.",
          features: {
            nextjs: "Next.js & React",
            performance: "Optimal performance",
            seo: "SEO optimized",
          },
        },
        landingpages: {
          title: "Landing Pages",
          description:
            "Conversion-optimized pages that turn visitors into customers.",
          features: {
            conversion: "Conversion-focused",
            speed: "Fast loading times",
            testing: "A/B Testing ready",
          },
        },
      },
      process: {
        title: "My Process",
        subtitle: "How I work – transparent and efficient.",
        steps: {
          discovery: {
            title: "Discovery",
            description: "We discuss your vision, goals, and requirements.",
          },
          design: {
            title: "Design & Development",
            description: "I create the design and develop your website.",
          },
          review: {
            title: "Review & Refine",
            description: "You get a demo. We refine the details together.",
          },
          launch: {
            title: "Launch",
            description: "Your website goes live. I hand over all access.",
          },
        },
      },
      cta: {
        title: "Ready to start?",
        subtitle: "Let's talk about your project.",
        button: "Get in touch",
      },
    },
    aboutPage: {
      title: "About Me",
      subtitle: "The Person Behind the Pixels",
      location: "Vienna, Austria",
      intro:
        "Hi, I'm FBWebVie – a freelance web designer and developer based in Vienna.",
      bio: [
        "I help businesses and individuals stand out online with modern, fast, and user-friendly websites.",
        "From the first idea to the finished website – everything from a single source. No agencies, no middlemen, just direct collaboration.",
        "My focus is on clean design, solid code, and websites that actually achieve results for my clients.",
      ],
      stats: {
        experience: {
          value: "2+",
          label: "Years Experience",
        },
        projects: {
          value: "10+",
          label: "Projects",
        },
        clients: {
          value: "100%",
          label: "Satisfaction",
        },
      },
      cta: "Let's Work Together",
    },
    imprint: {
      title: "Imprint",
      info: "Information according to § 5 ECG",
      contact: "Contact",
      vat: "VAT ID",
      responsible: "Responsible for content",
      disclaimer: {
        title: "Disclaimer",
        content:
          "The contents of my pages were created with the utmost care. However, I cannot guarantee the accuracy, completeness and timeliness of the content.",
      },
    },
    privacy: {
      title: "Privacy Policy",
      intro: {
        title: "Introduction",
        content:
          "The protection of your personal data is important to me. This privacy policy informs you about the type, scope and purpose of the processing of personal data on my website.",
      },
      hosting: {
        title: "Hosting",
        content:
          "My website is hosted by Netlify. When you visit my website, information is automatically stored in server log files that your browser automatically transmits.",
      },
      cookies: {
        title: "Cookies",
        content:
          "My website does not use tracking cookies. Only technically necessary cookies are used.",
      },
      contact: {
        title: "Contact",
        content:
          "If you contact me by email, your details will be stored to process the request. No data is passed on to third parties.",
      },
      rights: {
        title: "Your Rights",
        content:
          "You have the right to information, correction, deletion and restriction of the processing of your data. If you have any questions, please contact fbwebvie@hotmail.com.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy",
      available: "Available for projects",
      navigation: "Navigation",
      legal: "Legal",
      social: "Social",
    },
  },
};

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
