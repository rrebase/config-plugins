import { ConfigPlugin } from "expo/config-plugins";
export type ContentsJsonImageIdiom = "iphone" | "ipad" | "ios-marketing" | "universal";
export declare const ICON_CONTENTS: {
    idiom: ContentsJsonImageIdiom;
    sizes: {
        size: number;
        scales: (1 | 2 | 3)[];
    }[];
}[];
type IconSet = Record<string, {
    image: string;
    prerendered?: boolean;
}>;
declare const withDynamicIcon: ConfigPlugin<string[] | IconSet | void>;
export default withDynamicIcon;
