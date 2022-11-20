export const utilities = {
    getBaseApiUrl() {
        const apiOriginSuffix = '/api';
        return window.location.origin + apiOriginSuffix;
    }
}