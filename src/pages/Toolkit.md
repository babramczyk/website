# My Software Toolkit

Here's a list of some tools I like to use to build software.

> Disclaimer: Like any decision in software, I don't think dogmatism with these tools is ever really the answer. But, when they _are_ right for the task at hand, I like reaching for them when I can.

### TypeScript

It's sort of a bummer that TypeScript came out of the gate with the "superset of JavaScript" label. In my experience, that branding has lead to resentment of TS from a lot of developers: they come in thinking they don't have to learn a new language, and when things don't just work without some learning, frustration comes.

In my opinion, if you put in the work to approach TypeScript as a new language, it'll be your best friend one day. It'll catch bugs as-you-type, force you to Design By Contract, and stimulate conversations with your colleagues early on in development.

### Prettier

Remember when we had to bop around in our code and format it ourselves?

"Does this look better as a one-liner, or broken into three?"

"Damnit, this line's over 80 characters again -- gotta break it down."

And then you'd get to code review and hear a different opinion. Or see diffs unrelated to your changes because your code editor formatted an entire file for you.

Yeah, me neither 🙂

### ESLint

Prettier handles the formatting, ESLint handles the static bug catching. And it's good at it too.

Admittedly, a lot of the value I like it for [no-undef-var](https://eslint.org/docs/rules/no-undef) are redundant if you're in a TypeScript project, but it still provides a [lot](https://www.npmjs.com/package/eslint-plugin-jest) [of](https://github.com/yannickcr/eslint-plugin-react) [value](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) from its rich ecosystem, helping to enforce best practices and preventing misuse of libraries.

### Testing Library

In 2017 when I started my first job at AkitaBox, they threw me into the fire pretty quickly. It just so happened that that fire was something I hadn't been introduced to yet -- unit tests. Specifically, AngularJS (that's Angular "1") unit tests 😅 -- basically just tests against the "controller" alone in MVC UI components.

It kind of formed the impression I had for software "tests" for a while. You just had to write them. They catch the _occasional_ bug. And if they seem frustrating sometimes, you just kind of have to put up with it because it's a best practice and we need at least `x%` code coverage.

I feel substantially different about tests these days. I love writing tests. They give me confidence in my code when written correctly. But I'm pragmatic about when I write them. If that confidence isn't the most important thing I should be doing to help the project succeed, I'll forgo them momentarily (even at the risk of some code quality tool telling me my coverage is too low).

Anyways... back to the original point 🙂 Testing Library was instrumental in leading me to this epiphany on testing.

- It helps me write tests that break when something's broken and doesn't break when nothing's broken
- It helps me get better at web accessibility
- It helps me write tests only when they're worth it.

Here's the slides for a [presentation](https://slides.com/brettabramczyk-1/testing-ui-components) I did in 2020 on testing UI components that relates to the matter.

### AWS

AWS was a nebulous "thing" to me up until around 2020 or so when I decided to finally throw myself into it.

I'm glad I did. I mean I could throw a million typical trite (but accurate) AWS buzzwords at you (reliable, durable, availlable... 😴), but their docs and courses have me covered there. But really the biggest thing is that is has broken the gates wide open for me on the different services available to me and my peers as engineers, and the myriad things I could do with them.

I love adding to my developer "toolkit", and AWS, as it turns out, is more like a toolshed. So that's fun.

### GraphQL

Like TypeScript, I love how Graph gets you talking about the data contract _first_. The more I use Graph, the more it makes REST endpoints look like sloppy, untrustworthy kitchen sinks; and Graph schemas like a holy grail of data contracts.

Add in the tools you can employ to integrate Graph schemas with TypeScript, and you have a pretty powerful developer ecosystem that takes a _ton_ of the guesswork that happens a lot in JS projects.

### React

JS frameworks come and go, but React doesn't seem keen on going any time soon. And the reason is evident -- the React team is constantly looking for ways to solve the problems of the now and the future, while shedding less-than-ideal APIs before people realize they're less than ideal (think class components).

### CSS

Yeah, so there's like this really cool thing call C.S.S. I heard about one time and it's been really great for building rich UIs on the web 💁‍♂️

In all seriousness, the reason I put this on here is because I've grown pretty fond of CSS over the years, and my abilities with it. I think I looked around at a lot of the dev community complaining and struggling with it (myself included) and just took that as a challenge to just master it.

I haven't mastered it yet, but I'll get there some day. And when I do, I'll finally be able to say (or at least think) "it's not too bad once you get the hang of it" 🙂