import { FunctionComponent } from "react";
declare type BulletProps = {
    status: BulletStatus;
};
export declare enum BulletStatus {
    GREEN = "bullet--green",
    GREY = "bullet--grey",
    ORANGE = "bullet--orange",
    RED = "bullet--red"
}
declare const Bullet: FunctionComponent<BulletProps>;
export default Bullet;
