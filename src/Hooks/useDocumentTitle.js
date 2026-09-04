import { useEffect } from "react";

function useDocumentTitle(title, force) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = force ? title : title ? `${title} — Manar Merhi` : "Manar Merhi";
        return () => { document.title = prevTitle; };
    }, [title, force]);
}

export default useDocumentTitle;