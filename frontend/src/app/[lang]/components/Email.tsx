import { renderButtonStyle } from "../utils/render-button-style";
import FormSubmit from "./FormSubmit";
import Link from "next/link";

interface EmailProps {
  id: string;
  // __component: string;
  title: string;
  description: string;
  // emailPlaceholder: string;
  // submitButton: {
  //   text: string;
  // };
  button: Button;
}

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

export default function Email({ data }: { data: EmailProps }) {
  const button = data.button;

  return (
    <section className="py-6 dark:bg-black dark:text-gray-50">
      <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-none">{data.title}</h1>
          <p className="text-lg">{data.description}</p>
        </div>
        {/* <FormSubmit placeholder={data.emailPlaceholder} text={data.submitButton.text} /> */}
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
            key={0}
            href={button.url}
            target={button.newTab ? "_blank" : "_self"}
            className={renderButtonStyle(button.type)}
          >
            {button.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
