import { Text, Heading } from '../components';

const Introduction = () => {
  return (
    <div>
      <Heading variation="h4">Introduction</Heading>
      <Text>
        Swagfinger-UI is a design system meant for an easier developer experience. <br />
        It uses Styled-Components / Class Variance Authority (CVA) and TailwindCSS under the hood.
      </Text>
      <Text>
        The goal of this library is to combine the user-friendly approach of TailwindCSS, which is known for its
        comprehensive documentation, with the structure of Styled Components / CVA (Class Variance Authority). The aim
        is to create a solution that strikes a balance between being opinionated and providing the flexibility to meet
        different needs. By incorporating the best of both worlds, this library makes it easy for developers to quickly
        create a visually appealing interface without sacrificing design control. Whether you're working on a small
        project or a large one, this library can help you achieve your goals in a streamlined manner. Overall, the
        library is designed to offer the right amount of opinionatedness, ensuring that users have access to a range of
        pre-defined styles and components, while also providing the ability to customize and tailor the output to meet
        their specific requirements.
      </Text>

      <Text>
        Pre-defined modular components - with default styling, support of theming and darkmode. <br />
        Built with accessibility in mind.
        <br />
        Leverage already well-built battle-tested libraries. We dont re-invent the wheel.
        <br />
        <br />
        Motivation:
        <br />
        https://tailwindui.com/components/preview
        <br />
        https://ui.shadcn.com/
        <br />
        https://vercel.com/design/introduction
        <br />
        https://x.com
        <br />
        https://vitejs.dev/guide/
        <br />
        https://www.radix-ui.com/
        <br />
        https://react-spectrum.adobe.com/react-aria/index.html
        <br />
        https://mui.com/
        <br />
        https://headlessui.com/
        <br />
      </Text>
      <br />
      <Heading variation="h5">Release Features</Heading>
      <Text>
        Written in Typescript
        <br />
        Styled Components, TailwindCSS, CVA, (tw-merge, CLSX, cn),
        <br />
        Dark-mode compatible
        <br />
        Theming
        <br />
        Accessibility
        <br />
        Tested
        <br />
      </Text>
      <br />
    </div>
  );
};

export default Introduction;
