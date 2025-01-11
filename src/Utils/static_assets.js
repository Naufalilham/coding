export default function getStaticAsset(folder, filename) {

    if (!folder || folder == '') {
        return new URL(`/src/assets/${filename}`, import.meta.url)
            .href;
    }

    return new URL(`/src/assets/${folder}/${filename}`, import.meta.url).href
}