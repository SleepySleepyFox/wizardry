export default async function injectHTML(p0: string, selector: Element | null,) {
    try {
        const response = await fetch(p0);
        if (!response.ok) {
            return;
        }
        const text = await response.text();
        if(!selector) return
        selector.innerHTML = text;
    } catch (err : any) {
        console.error(err.message);
    }
  }