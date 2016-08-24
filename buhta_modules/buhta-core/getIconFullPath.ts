import {ICONS_PATH, ICONS_DEFAULT_EXT} from "./Constants";

export function getIconFullPath(path: string): string {
    if (path === undefined)
        return "";
    let _path = path.toLowerCase();
    if (_path.endsWith(".png") ||
        _path.endsWith(".jpg") ||
        _path.endsWith(".ico") ||
        _path.endsWith(".tiff")
    ) {
        return ICONS_PATH + path;
    }
    else
        return ICONS_PATH + path + "." + ICONS_DEFAULT_EXT;
}
