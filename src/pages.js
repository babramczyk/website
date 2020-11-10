export const PAGES = {
  README: {
    path: "/",
    filename: "README.md",
    iconSrc: "/icons/info.svg",
  },
  NOT_FOUND: {
    path: "/404",
    filename: "404.md",
    iconSrc: "/icons/markdown.svg",
  },
  TEN_FACTOR: {
    path: "/10-factor/",
    filename: "10Factor.md",
    iconEmoji: "👨‍💻",
  },
  AKITABOX: {
    path: "/akitabox/",
    filename: "AkitaBox.md",
    iconSrc: "/akitabox.png",
  },
  ANCILLA_PARTNERS: {
    path: "/ancilla-partners/",
    filename: "AncillaPartners.md",
    iconSrc: "/ancilla-partners__inverted-transparent.png",
  },
  BOOKS: {
    path: "/books/",
    filename: "Books.md",
    iconEmoji: "📚",
  },
  NM: {
    path: "/northwestern-mutual/",
    filename: "NorthwesternMutual.md",
    iconSrc: "/nm.png",
  },
  SCHOOL: {
    path: "/school/",
    filename: "School.md",
    iconSrc: "/uw-madison.png",
  },
  SKILLS: {
    path: "/skills/",
    filename: "Skills.md",
    iconEmoji: "🚀",
  },
  TOOLKIT: {
    path: "/toolkit/",
    filename: "Toolkit.md",
    iconEmoji: "🧰",
  },
  NO_ESTIMATES: {
    path: "/no-estimates/",
    filename: "#NoEstimates.md",
    iconEmoji: "🃏",
  },
};

/*******************************************************************
 * Utils
 *******************************************************************/

export function getPageByPath(path) {
  const page = Object.values(PAGES).find((page) => page.path === path);
  if (!page) {
    console.error(`Cannot find page with path: ${path}`);
    return null;
  }

  return page;
}

export function getPageByFilename(filename) {
  const page = Object.values(PAGES).find((page) => page.filename === filename);
  if (!page) {
    console.error(`Cannot find page with filename: ${filename}`);
    return null;
  }

  return page;
}
