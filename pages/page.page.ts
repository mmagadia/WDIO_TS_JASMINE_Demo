export default class Page {
    open () {
        return browser.url('');
    }

    openURL (url: string) {
        return browser.url(url);
    }
}
