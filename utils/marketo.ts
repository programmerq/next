import { useState, useEffect } from "react";

const { NEXT_PUBLIC_HOST } = process.env;
const { NEXT_PUBLIC_MARKTO_MUNCHKIN_ID } = process.env;
const { NEXT_PUBLIC_MARKTO_BASE_URL } = process.env;

function loadScript(baseUrl: string): Promise<string> {
  const url = `${baseUrl}/js/forms2/js/forms2.min.js`;

  return new Promise((resolve, reject) => {
    if (window.MktoForms2 && document.querySelector(`script[src=${url}]`)) {
      return resolve(baseUrl);
    }

    const scriptElement = document.createElement("script");

    scriptElement.onload = () => {
      if (window.MktoForms2) {
        return resolve(baseUrl);
      }
    };

    scriptElement.onerror = () => reject(new Error("Can't load script"));

    scriptElement.src = `${baseUrl}/js/forms2/js/forms2.min.js`;

    document.body.appendChild(scriptElement);
  });
}

interface UseMarketoProps {
  formId: string;
  callback?: () => void;
}

export function useMarketo({ formId, callback }: UseMarketoProps): boolean {
  const [url, setUrl] = useState<string>(undefined);

  useEffect(() => {
    if (!url) {
      loadScript(NEXT_PUBLIC_MARKTO_BASE_URL)
        .catch(() => loadScript(NEXT_PUBLIC_HOST))
        .then(setUrl)
        .catch((e) => console.error(e));

      return;
    }

    window.MktoForms2.loadForm(
      url,
      NEXT_PUBLIC_MARKTO_MUNCHKIN_ID,
      formId,
      callback
    );
  }, [url, formId, callback]);

  return Boolean(url);
}
