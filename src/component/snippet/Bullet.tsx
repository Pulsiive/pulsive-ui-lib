import React, {FunctionComponent} from "react";
import clsx from "clsx";

type BulletProps = {
    status: BulletStatus;
};

export enum BulletStatus {
    GREEN = "bullet--green",
    GREY = "bullet--grey",
    ORANGE = "bullet--orange",
    RED = "bullet--red",
}

const Bullet: FunctionComponent<BulletProps> = ({ status = BulletStatus.GREY }) => (
    <span className={clsx("bullet", status)} />
);

export default Bullet;
